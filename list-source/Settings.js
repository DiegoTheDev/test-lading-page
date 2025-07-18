/*

List your files like:
    Main: [
        {
            "type": "folder",
            "name": "name",
            "items": [
                {
                    "type": "item",
                    "name": "blah",
                    "href": "list-source/Files.js"
                }
            ]
        },
        { --in the explorer it self.
            "type": "item",
            "name": "blah",
            "href": "list-source/Files.js"
        }
    ]


    THEMES: simple or glass
*/

var setts = {
    "fakeLoading": true,
    "theme": "glass",
    "rootName": "/root/",
    "files": [
            {
                "type": "folder",
                "name": "Trabalhos da escola",
                "items": [
                            {
                        "type": "folder",
                        "name": "Pequenos",
                        "items": [
                            {
                                "type": "item",
                                "name": "2/6",
                                "href": "trabalhos/dia2dejul/index.html"
                            }
                        ]
                    },
                    {
                        "type": "item",
                        "name": "Calculadora",
                        "href": "calculadora/index.html"
                    },
                    {
                        "type": "item",
                        "name": "Landing page",
                        "href": "lading-page/src/lading.html"
                    },
                    {
                        "type": "item",
                        "name": "Register Facebook",
                        "href": "register-page/index.html"
                    }
                ]
            },
            {
                "type": "folder",
                "name": "Pessoais",
                "items": [
                    {
                        "type": "item",
                        "name": "Lading page v2",
                        "href": "projetos-pessoais/ladingpage/index.html"
                    },
                    {
                        "type": "item",
                        "name": "Listagem antiga",
                        "href": "index-old.html"
                    },
                    {
                        "type": "item",
                        "name": "Listagem antiga - css",
                        "href": "list-system/style.css"
                    },
                    {
                        "type": "item",
                        "name": "Listagem antiga - js",
                        "href": "list-system/main.js"
                    },
                    {
                        "type": "item",
                        "name": "Listagem Stress test",
                        "href": "list-source/list-stress.html"
                    }
                ]
            }
        ]
}; 
