import React from "react";
import { useState } from "react";
import Editform from "../components/Editform";
import PopupModal from "../components/PopupModal";
import dataIII from "./mock-data3.json";

function BlogPanel() {
    const [articles, setArticles]= useState(dataIII)
    const [searchArticle, setSearchArticle]= useState("");
    const [article, setArticle]= useState({})
    const [addArticle, setAddArticle]= useState(false);
    const [showArticle, setShowArticle] = useState(false);
    const [editForm, setEditForm]= useState(false);
    

    return(
        <div className="blog_panel">
            <h1>Blog Panel</h1>
            <div className="blog_div">
            <input type="text" placeholder="Search by title..." onChange={event =>{setSearchArticle(event.target.value)}} />

            <button className="add_article" onClick={() => {
              setAddArticle(true)
            }}> Create a blog article</button>
            </div>
            

            <table className="blog_table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Settings</th>
                    </tr>
                </thead>

                <tbody>
                  {articles.filter((article) =>{
                    if (searchArticle == "") {
                      return  article
                    } else if (article.main_title.toLowerCase().includes(searchArticle.toLowerCase())) {
                      return article
                    }
                  }).map((article, id)=>(
                    <tr key={id}>
                    <td>{article.id} </td>
                    <td>{article.main_title}</td>
                    <td>{article.published_date}</td>
                    <td><button className="table_button" onClick={() => {
                      setShowArticle(true)
                      setArticle(article)
                    }}>Show</button></td>
                  </tr>     
                  ))}
                </tbody>
            </table>

            <PopupModal trigger={addArticle} setTrigger={setAddArticle} className="add_article_space"  >
              <h1>Add Article</h1>
              <input type="text" placeholder="Add Main Title..." rows={3} />
              <input type="text" placeholder="Add Secondary Title..." rows={3} />
              <input type="file" name="Add Image"  />
              <textarea placeholder="add article content..." cols="30" rows="10"></textarea>
              <button className="modal_button">Add Article</button>
            </PopupModal>

            <PopupModal trigger={showArticle} setTrigger={setShowArticle} className="article_info" >
              <h1>Article Info</h1>
              <p>Main Title: {article.main_title} </p>
              <p>Secondary Title:{article.secondary_tile} </p>
              <p>Image: <img src={article.image} alt="" srcset="" />  </p>
              <p>Content: {article.content}</p>
              <p>Date Published: {article.published_date}</p>
              <div className="modal_buttons">
              <button onClick={()=>{
                setEditForm(true)
                setShowArticle(false) }} >Edit</button>
                <button  >Delete </button>
              </div>
            </PopupModal>

            <Editform trigger={editForm} setTrigger={setEditForm}>
            <h1>Edit Article Info</h1>
              <p>Main Title: <textarea id="maintitle_edit" cols="20" rows="5">{article.main_title}</textarea>  </p>
              <p>Secondary Title: <textarea id="secondarytitle_edit" cols="20" rows="5">{article.secondary_tile}</textarea> </p>
              <p>Image: <input type="file" name="image" id="" />  </p>
              <p>Content: <textarea id="content_edit" cols="30" rows="10">{article.content}</textarea></p>
              <p>Date Published: {article.published_date}</p>
              <div className="modal_buttons">
              <button>Save</button>
                <button >Delete </button>
              </div>
            </Editform>

           
          
        </div>
    )
}

export default BlogPanel