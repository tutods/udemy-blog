import { SchemaTypeDefinition } from 'sanity';

export const authorSchema: SchemaTypeDefinition = {
  title: 'Authors',
  name: 'author',
  type: 'document',
  groups: [
    {
      title: 'Main Info.',
      name: 'info',
    },
    {
      title: 'Social',
      name: 'social',
    },
  ],
  fields: [
    {
      title: 'Photo',
      name: 'avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'info',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      placeholder: 'Insert author name',
      group: 'info',
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'text',
      placeholder: 'Short bio about the author',
      group: 'info',
    },
    {
      title: 'GitHub',
      name: 'github',
      type: 'string',
      group: 'social',
    },
    {
      title: 'LinkedIn',
      name: 'linkedin',
      type: 'string',
      group: 'social',
    },
    {
      title: 'Twitter',
      name: 'twitter',
      type: 'string',
      group: 'social',
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'string',
      group: 'social',
    },
    {
      title: 'Facebook',
      name: 'facebook',
      type: 'string',
      group: 'social',
    },
  ],
};
