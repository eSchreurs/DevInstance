import React, { useMemo, Suspense, useState, useEffect } from "react";
import { Kanban } from 'react-kanban-kit'
import "./styles/kanban.css";
import { IncidentService } from './services/IncidentService';

export default function KanbanPage() {
  const [incidents, setIncidents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const incidentService = useMemo(() => new IncidentService(), [])

    const refreshIncidents = async () => {
        try {
            setLoading(true)
            setError(null)
            const data = await incidentService.list()
            setIncidents(data)
        } catch (err) {
            setError('Failed to load incidents: ' + (err.message || 'Unknown error'))
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const baseDataSource = useMemo(() => ({
      root: {
        id: "root",
        title: "Root",
        children: ["new", "in_progress", "on_hold", "resolved", "closed"],
        totalChildrenCount: 5,
        parentId: null,
      },
      new: { id: "new", title: "New", children: [], totalChildrenCount: 0, parentId: "root" },
      in_progress: { id: "in_progress", title: "In Progress", children: [], totalChildrenCount: 0, parentId: "root" },
      on_hold: { id: "on_hold", title: "On Hold", children: [], totalChildrenCount: 0, parentId: "root" },
      resolved: { id: "resolved", title: "Resolved", children: [], totalChildrenCount: 0, parentId: "root" },
      closed: { id: "closed", title: "Closed", children: [], totalChildrenCount: 0, parentId: "root" },
    }), []);
    
    const dataSource = useMemo(() => {
      // clone base so we can fill it safely
      const ds: any = {
        ...baseDataSource,
        new: { ...baseDataSource.new, children: [] },
        in_progress: { ...baseDataSource.in_progress, children: [] },
        on_hold: { ...baseDataSource.on_hold, children: [] },
        resolved: { ...baseDataSource.resolved, children: [] },
        closed: { ...baseDataSource.closed, children: [] },
      };
    
      for (const inc of incidents ?? []) {
        console.log(inc)
        const stateId = String(inc?.status?.value).toLowerCase();
        const laneId = ds[stateId] ? stateId : "new";
    
        const sysId = inc?.sys_id?.value;
        const cardId = `inc-${sysId}`;
    
        ds[cardId] = {
          id: cardId,
          type: "card",
          parentId: laneId,
          children: [],
          totalChildrenCount: 0,
          title: inc.number.value,
          content: {
            description: inc.short_description.value,
            priority: inc.priority.value
          },
          incident: inc,
        };
    
        ds[laneId].children.push(cardId);
      }
    
      // update counts
      for (const lane of ["new","in_progress","on_hold","resolved","closed"]) {
        ds[lane].totalChildrenCount = ds[lane].children.length;
      }
    
      return ds;
    }, [baseDataSource, incidents]);


  const configMap = useMemo(() => ({
    card: {
      render: ({ data, column, index, isDraggable }) => (
        <div className="task-card">
          <h4>{data.title}</h4>
          <p>{data.content?.description}</p>
          <div className="card-footer">
            <span className="assignee">{data.content?.assignee}</span>
            <span className="due-date">{data.content?.dueDate}</span>
          </div>
        </div>
      ),
      isDraggable: true,
    },
  
    divider: {
      render: ({ data }) => (
        <div className="divider">
          <hr />
          <span>{data.title}</span>
        </div>
      ),
      isDraggable: false,
    },
  
    footer: {
      render: ({ data, column }) => (
        <button className="add-card-btn">+ Add card to {column.title}</button>
      ),
      isDraggable: false,
    },
  }), []);

  useEffect(() => {
    void refreshIncidents()
}, [])

useEffect(() => {
  if (!incidents){
    return;
  }
  console.log(incidents);
}, [incidents])

  return (
    <Suspense fallback={<div>Loading kanban…</div>}>
      <div className="my-kanban">
      <Kanban
      dataSource={dataSource}
      configMap={configMap}
      onCardMove={(move) => {
        console.log("Card moved:", move);
        // Handle card movement
      }}
      onColumnMove={(move) => {
        console.log("Column moved:", move);
        // Handle column reordering
      }}
      // DND state change callbacks
      onCardDndStateChange={(info) => {
        console.log("Card DND state:", info.state.type);
        if (info.state.type === "is-dragging") {
          // Card is being dragged
        }
      }}
      onColumnDndStateChange={(info) => {
        console.log("Column DND state:", info.state.type);
        if (info.state.type === "is-card-over") {
          // Card is being dragged over this column
        }
      }}
        // Custom drag previews
  renderCardDragPreview={(card, info) => (
    <div className="drag-preview">
      <h4>{card.title}</h4>
      <span>{card.content.description}</span>
    </div>
  )}
  renderCardDragIndicator={(card, info) => (
    <div className="drop-indicator" style={{ height: info.height, backgroundColor: "#eee" }} />
  )}

    />
    </div>
    </Suspense>
  );
}