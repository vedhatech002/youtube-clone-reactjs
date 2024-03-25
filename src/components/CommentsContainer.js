const commentsData = [
  {
    name: "vijay",
    text: "this my comment state ment for above video",
    replies: [],
  },
  {
    name: "vijay",
    text: "this my comment state ment for above video",
    replies: [
      {
        name: "vijay",
        text: "this my comment state ment for above video",
        replies: [],
      },
      {
        name: "vijay",
        text: "this my comment state ment for above video",
        replies: [
          {
            name: "vijay",
            text: "this my comment state ment for above video",
            replies: [
              {
                name: "vijay",
                text: "this my comment state ment for above video",
                replies: [
                  {
                    name: "vijay",
                    text: "this my comment state ment for above video",
                    replies: [],
                  },
                ],
              },
              {
                name: "vijay",
                text: "this my comment state ment for above video",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "vijay",
    text: "this my comment state ment for above video",
    replies: [],
  },
  {
    name: "vijay",
    text: "this my comment state ment for above video",
    replies: [],
  },
  {
    name: "vijay",
    text: "this my comment state ment for above video",
    replies: [],
  },
  {
    name: "vijay",
    text: "this my comment state ment for above video",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex my-2 bg-gray-100 p-2 rounded ">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.217 19.332A6.982 6.982 0 0 0 12 17c-2.073 0-3.935.9-5.217 2.332M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18m0-7a3 3 0 1 1 0-6a3 3 0 0 1 0 6"
          ></path>
        </svg>
      </span>
      <div className="px-3">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {/* replies */}
      <div className="pl-5 border-l-black border-l">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <section className="mt-6">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </section>
  );
};

export default CommentsContainer;
