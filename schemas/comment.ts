import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
      }),
       defineField({
        name: 'approved',
        title: 'Approved',
        type: 'boolean',
        description: 'Comments will not be shown without approval!',
      }),
        defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
      }),
        defineField({
        name: 'comment',
        title: 'Comment',
        type: 'text',
      }),
        defineField({
        name: 'post',
        type: 'reference',
        to: [{type: 'post'}]
        }), 
    ],
  },
    {/*preview: {
      select: {
        _id: '_id',
        title: 'comment',
        name: 'name',
        type: 'text',
        comment: 'comment',
        _createdAt: '_createdAt',
      },
      prepare(selection) {
        const {comment} = selection 
        return {...selection, subtitle: comment}
      }*
    }*/
})

