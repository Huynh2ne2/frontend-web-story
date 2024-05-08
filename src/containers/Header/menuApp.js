export const adminmenu = [
    {
        name: 'menu.admin.home', link: '/home',
        menus: [
            {
                name: 'menu.admin.home', link: '/home',
            },
        ],
    },
    {
        name: 'menu.admin.manage-user',
        menus: [
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux'
            },
            {
                name: 'menu.admin.story-redux', link: '/system/story-redux'
            },
            {
                name: 'menu.admin.manage-story', link: '/system/manage-story'
            },
        ]
    },
    {
        name: 'menu.admin.record',
        menus: [
            {
                name: 'menu.admin.manage-record', link: '/system/record-manage'
            },
        ]
    }
];

export const authormenu = [
    {
        name: 'menu.admin.manage-user',
        menus: [
            {
                name: 'menu.admin.story-redux', link: '/system/story-redux'
            },
            {
                name: 'menu.admin.manage-story', link: '/system/manage-story'
            },
        ]
    }
];