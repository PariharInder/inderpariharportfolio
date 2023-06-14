const profile = {
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }
        },
        {
            name: 'profilePhoto',
            title: 'Profile Photo',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                },
            ]
        },
        {
            name: 'linkedin',
            title: 'LinkedIn URL',
            type: 'url'
        },
        {
            name: 'github',
            title: 'GitHub URL',
            type: 'url'
        },
        {
            name: 'about',
            title: 'About',
            type: 'array',
            of: [{ type: 'block' }]
        }
    ]
}

export default profile