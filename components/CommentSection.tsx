import {Comment} from '../typings';


const CommentSection = (props: { comments: Comment[]}) => {
    const { comments } = props;
    return (
        <>
         <h2 className="mt-10 mb-4 text-2xl lg:text-3xl leading-tight">Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id} className="mb-5">
            <h4 className="mb-2 leading-tight"><a href={`mailto:${comment.email}`}>{Comment.name}</a>
                <p className="italic text-sm">
                    {new Date(comment._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                    })}
                </p>
            </h4>
            <p>{comment.comment}</p>
            <hr  className="mt-5 mb-5" />
          </li>
        ))}
      </ul>
      </> 
    )
}

export default CommentSection;