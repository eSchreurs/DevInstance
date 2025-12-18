import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '0e88cce283f13210c8d2cd19feaad326': {
                        table: 'sys_ui_element'
                        id: '0e88cce283f13210c8d2cd19feaad326'
                    }
                    '3188042283f13210c8d2cd19feaad3a1': {
                        table: 'sys_ui_section'
                        id: '3188042283f13210c8d2cd19feaad3a1'
                    }
                    '4288cce283f13210c8d2cd19feaad329': {
                        table: 'sys_ui_element'
                        id: '4288cce283f13210c8d2cd19feaad329'
                    }
                    '4688cce283f13210c8d2cd19feaad328': {
                        table: 'sys_ui_element'
                        id: '4688cce283f13210c8d2cd19feaad328'
                    }
                    '4688cce283f13210c8d2cd19feaad32b': {
                        table: 'sys_ui_element'
                        id: '4688cce283f13210c8d2cd19feaad32b'
                    }
                    '4a88cce283f13210c8d2cd19feaad327': {
                        table: 'sys_ui_element'
                        id: '4a88cce283f13210c8d2cd19feaad327'
                    }
                    '4a88cce283f13210c8d2cd19feaad32a': {
                        table: 'sys_ui_element'
                        id: '4a88cce283f13210c8d2cd19feaad32a'
                    }
                    '4e88cce283f13210c8d2cd19feaad329': {
                        table: 'sys_ui_element'
                        id: '4e88cce283f13210c8d2cd19feaad329'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'b1124b4294aa4d508a73fdbf087c77a8'
                    }
                    c288cce283f13210c8d2cd19feaad32a: {
                        table: 'sys_ui_element'
                        id: 'c288cce283f13210c8d2cd19feaad32a'
                    }
                    c688cce283f13210c8d2cd19feaad329: {
                        table: 'sys_ui_element'
                        id: 'c688cce283f13210c8d2cd19feaad329'
                    }
                    ca88cce283f13210c8d2cd19feaad328: {
                        table: 'sys_ui_element'
                        id: 'ca88cce283f13210c8d2cd19feaad328'
                    }
                    ca88cce283f13210c8d2cd19feaad32b: {
                        table: 'sys_ui_element'
                        id: 'ca88cce283f13210c8d2cd19feaad32b'
                    }
                    ce88cce283f13210c8d2cd19feaad327: {
                        table: 'sys_ui_element'
                        id: 'ce88cce283f13210c8d2cd19feaad327'
                    }
                    ce88cce283f13210c8d2cd19feaad32a: {
                        table: 'sys_ui_element'
                        id: 'ce88cce283f13210c8d2cd19feaad32a'
                    }
                    'incident-manager-page': {
                        table: 'sys_ui_page'
                        id: '0bf81a6b11924c3693f2ca81782a62e2'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '4e9336a6a80f4030806a9c8bc46de962'
                    }
                    'x_326171_portfolio/main': {
                        table: 'sys_ux_lib_asset'
                        id: '0f96fa121383401da0edaf69d13361fe'
                        deleted: false
                    }
                    'x_326171_portfolio/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '7b08e652824e4261a7c82c9f94b03707'
                        deleted: false
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '04a7a2af57a04772be193d7d5211d68f'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'priority'
                            value: '3'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '078ba94be76b48c9b98e826b5bf0a3be'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'status'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0a39389913864fd799507ffdab62ea26'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1241cf015d9c4dd8b450247a734fcb5f'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '137511ec627a48e884f79be1a672ed87'
                        key: {
                            category: 'x_326171_portfolio_incident'
                            prefix: 'INC'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1d2c3f06725c4d9092f76e0937720bdd'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'opened_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '239aae97335e4e75906b27c2ac1c5b22'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'status'
                            value: 'on_hold'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '25d4121fbd4e48198a1437b12b93a36a'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3488402283f13210c8d2cd19feaad384'
                        key: {
                            list_id: {
                                id: '7888402283f13210c8d2cd19feaad382'
                                key: {
                                    name: 'x_326171_portfolio_incident'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3888402283f13210c8d2cd19feaad384'
                        key: {
                            list_id: {
                                id: '7888402283f13210c8d2cd19feaad382'
                                key: {
                                    name: 'x_326171_portfolio_incident'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'resolved_at'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3c88402283f13210c8d2cd19feaad383'
                        key: {
                            list_id: {
                                id: '7888402283f13210c8d2cd19feaad382'
                                key: {
                                    name: 'x_326171_portfolio_incident'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3c88402283f13210c8d2cd19feaad384'
                        key: {
                            list_id: {
                                id: '7888402283f13210c8d2cd19feaad382'
                                key: {
                                    name: 'x_326171_portfolio_incident'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '421da0ce60d840d38568044cdfe2eadb'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '44393a2a08284e7c9b801c6b061324c4'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '579592f353fa4dceaeef1d219b6dcf0b'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'priority'
                            value: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6cda1c5d3cd041cb885bd68370e8533a'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '77ce9300ae6e4c989ae3a8266267583f'
                        key: {
                            name: 'x_326171_portfolio_incident'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '7888402283f13210c8d2cd19feaad382'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7c809cde087c49dcbc6b803ac956ff8d'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'resolved_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7fc4df369832469e8e5093af44ef8625'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'priority'
                            value: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '82298f73041b47f3b399e3cb3f7a78fe'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '8333f0cb4e0f40aa995cefa598fc5fc2'
                        deleted: false
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '89175b2e71ff4817adfd8142100f1477'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'priority'
                            value: '2'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9715eb636018424291423758102a0c9d'
                        deleted: false
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a45f93687d64782b0024e1d3dedde81'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'resolved_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a531b9fea19c41108c4e8e774cd041af'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'abeee2e13dc44b06a1595b6acf698fd2'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'b088402283f13210c8d2cd19feaad384'
                        key: {
                            list_id: {
                                id: '7888402283f13210c8d2cd19feaad382'
                                key: {
                                    name: 'x_326171_portfolio_incident'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'b488402283f13210c8d2cd19feaad384'
                        key: {
                            list_id: {
                                id: '7888402283f13210c8d2cd19feaad382'
                                key: {
                                    name: 'x_326171_portfolio_incident'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'b888402283f13210c8d2cd19feaad384'
                        key: {
                            list_id: {
                                id: '7888402283f13210c8d2cd19feaad382'
                                key: {
                                    name: 'x_326171_portfolio_incident'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c399f1e1eb5047f0be15c43be624177e'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cc41fea8410c47a3a7396398741657be'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'status'
                            value: 'resolved'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dc0e0b88f30241cc8dd3101ac28f4e26'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_ui_view'
                        id: 'Default view'
                        deleted: false
                        key: {
                            name: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e207ab7fde134bdaa4720198daaf71bc'
                        key: {
                            name: 'x_326171_portfolio_incident'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ee1ec883053c43be920fa1b33c7a5460'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'status'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f634295a2977430fa350ac1012a2b74d'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fc43583ec5334b9d850ad5d5db9df67a'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fd380faf7863451892d06d36e29dfc27'
                        key: {
                            name: 'x_326171_portfolio_incident'
                            element: 'number'
                        }
                    },
                ]
            }
        }
    }
}
