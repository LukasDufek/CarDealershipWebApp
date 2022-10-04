import axios from "axios";

const url = 'api/posts/';


class PostService{
    //get posts
    static getPosts(){

        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject)=>{
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        znacka: post.znacka,
                        model: post.model,
                        cena: post.cena,
                        rok: post.rok,
                        kilometry:post.kilometry,
                        karoserie: post.karoserie,
                        palivo:post.palivo,
                        motor: post.motor,
                        vykon: post.vykon,
                        barva: post.barva,
                        fotka: post.fotka,
                        prodane: post.prodane,
                        datumProdeje: post.datumProdeje


                    }))
                )
            }catch (err){
                reject(err);
            }
        });
    }

    //create posts
    static insertPost(text){
        return axios.post(url, {
            text
        });
    }

    //delete posts
    static deletePost(id){
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;
