import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { GetSingleBlogDetails } from '../Redux/BlogSingleSlice';
import { PostComment } from '../Redux/PostCommentSlice';
import { GetBlogCommentDetails } from '../Redux/GetCommentSlice';

const Blogsingle = () => {


  const { single_blog } = useSelector((state) => state?.SingleBlog);
  const { comment_details } = useSelector((state) => state?.CommentDetails);



  const formatDate = (timestamp) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };

    return new Date(timestamp).toLocaleString('en-US', options);
  };

  const [comment, setComment] = useState();

  const user_id = localStorage.getItem("id")
  const blog_Id = single_blog?.data?._id

  const id = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetSingleBlogDetails(id));
    dispatch(GetBlogCommentDetails(id));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(PostComment({ comment, user_id, blog_Id }));
  };


  return (
    <div>
      <section class="page-title bg-1">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="block text-center">
                <span class="text-white">News details</span>
                <h1 class="text-capitalize mb-5 text-lg">Blog Single</h1>


              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section blog-wrap">

        <div class="container">

          <div class="row">


            <div class="col-lg-12 mb-5">
              <div class="single-blog-item">
                <img src="/images/blog/blog-2.jpg" alt="" class="img-fluid" style={{ width: "100rem", height: "40rem" }} />

                <div class="blog-item-content mt-5">
                  <div class="blog-item-meta mb-3">
                    {/* <span class="text-color-2 text-capitalize mr-3"><i class="icofont-book-mark mr-2"></i> Equipment</span> */}
                    <span class="text-muted text-capitalize mr-3"><i class="icofont-comment mr-2"></i>{comment_details?.count} Comments</span>
                    <span class="text-black text-capitalize mr-3"><i class="icofont-calendar mr-2"></i> {formatDate(single_blog?.data?.createdAt)}</span>
                  </div>

                  <h2 class="mb-4 text-md">{single_blog?.data?.title}</h2>

                  <p class="lead mb-4">{single_blog?.data?.description}</p>


                  <div class="mt-5 clearfix">


                    <ul class="float-right list-inline">
                      <li class="list-inline-item"> Share: </li>
                      <li class="list-inline-item"><a href="#!"><i class="icofont-facebook"></i></a></li>
                      <li class="list-inline-item"><a href="#!"><i class="icofont-twitter"></i></a></li>
                      <li class="list-inline-item"><a href="#!"><i class="icofont-pinterest"></i></a></li>
                      <li class="list-inline-item"><a href="#!"><i class="icofont-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment */}

            <div class="col-lg-12">



              <div class="comment-area mt-4 mb-5">
                <h4 class="mb-4">{comment_details?.count} Comments </h4>
                <ul class="comment-tree list-unstyled">

                  {comment_details?.data?.map((item, index) => {

                    const formattedDate = new Date(item?.createdAt).toLocaleString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true,
                    });

                    return (
                      <>
                        <li class="mb-5">
                          <div class="comment-area-box d-block d-sm-flex">
                            <div class="comment-thumb">
                              <img src="https://bcdn.mindler.com/bloglive/wp-content/uploads/2021/12/16121558/Blog-Post-770x385.png" style={{ width: "70px" }} />
                            </div>

                            <div class="block">
                              <div class="comment-info">
                                <h5 class="mb-1">{item?.user_id?.name}</h5>
                                <span>Posted at </span>
                                <span class="date-comm"> | {formattedDate}</span>
                              </div>

                              <div class="comment-content mt-3">
                                <p>{item?.comment} </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </>
                    );
                  })}


                </ul>
              </div>



            </div>



            <div class="col-lg-12">
              <form class="comment-form my-5" id="comment-form" onSubmit={(e) => handleSubmit(e)}>
                <h4 class="mb-4">Write a comment</h4>

                <textarea class="form-control mb-4" name="comment" id="comment" onChange={(e) => setComment(e.target.value)} cols="30" rows="5"
                  placeholder="Comment"></textarea>

                <input class="btn btn-main" type="submit" name="submit-contact" id="submit_contact"
                  value="Submit Message" />
              </form>
            </div>

            {/* Comment */}

          </div>

        </div>
      </section>
    </div>
  )
}

export default Blogsingle
