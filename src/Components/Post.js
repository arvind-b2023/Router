import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loadingpage from "./Loadingpage";

//Post page
export default function Post() {
  // https://fakestoreapi.com/products
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true);
  const [userPost, setUserPost] = useState([]);
  const [searchText, setSearchText] = useState("")
  const [isActive, setIsActive] = useState("all");
  const [url, setUrl] = useState("")
  const loadPost = async () => {
    setLoading(true);
    const response = await axios.get(`https://fakestoreapi.com/products/${url}`);
    setUserPost(response.data);
    setLoading(false);
  }
  useEffect(() => {
    loadPost();
  }, [url]);
  function moredetaile(id) {
    navigate(`/products/${id}`)
  }
  function postdelete(id) {
    setUserPost(userPost.filter(val => val.id !== id));
  }
  //category/jewelery
  return (
    <div className="float-end f-flex  " style={{ width: "85%" }}>
      <div className="search d-flex m-4">
        <input type="text" className="form-control w-25 mx-1" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search...." />
        <button className="btn btn-dark">Search</button>
        <button className="btn btn-dark px-4 mx-2">Add post</button>
      </div>
      <h3 className="mx-5 mt-2">Categories {isActive}</h3>
      <div className="btn-group w-100 mb-5 mt-3 justify-content-around f-flex" role="group" aria-label="Basic example">
        <button type="button" className={`btn btn-outline-dark  rounded mx-3 ${isActive === "all" ? "active" : ""}`} onClick={() => { setUrl(""); setIsActive("all") }} >All products</button>
        <button type="button" className={`btn btn-outline-dark  rounded mx-3 ${isActive === "electronics" ? "active" : ""}`} onClick={() => { setUrl("category/electronics"); setIsActive("electronics") }} >Electronics</button>
        <button type="button" className={`btn btn-outline-dark  rounded mx-3 ${isActive === "jewelery" ? "active" : ""}`} onClick={() => { setUrl("category/jewelery"); setIsActive("jewelery") }} >Jewelery</button>
        <button type="button" className={`btn btn-outline-dark  rounded mx-3 ${isActive === "men" ? "active" : ""}`} onClick={() => { setUrl("category/men's%20clothing"); setIsActive("men") }}>Men's clothing</button>
        <button type="button" className={`btn btn-outline-dark  rounded mx-3 ${isActive === "women" ? "active" : ""}`} onClick={() => { setUrl("category/women's%20clothing"); setIsActive("women") }} >Women's clothing</button>
      </div>

      {loading ? <Loadingpage /> : <> <div className="d-flex flex-wrap">

        {userPost && (searchText.length > 1 ? userPost.filter(val => val.title.toLowerCase().match(searchText)) : userPost).map(val => {
          return (
            <>
              <div className="card cards shadow p-2 m-3 bg-body rounded  " style={{ width: "18rem" }}>
                <img src={val.image} height={"200rem"} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column justify-content-around">
                  <h5 className="card-title">{val.title}</h5>
                  <div className="card-price">
                    $<b>{val.price}</b></div>
                  <p className="card-price"></p>
                  <div>
                    <button href="#" className="btn btn-primary mx-2" onClick={() => moredetaile(val.id)}>More...</button>
                    <button href="#" className="btn btn-primary mx-2" onClick={() => postdelete(val.id)}>Delete</button>
                  </div>
                </div>
              </div>

            </>)
        })}

      </div></>}

    </div>

  )
}
