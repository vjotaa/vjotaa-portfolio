import axios from 'axios'

const dribbbleConfig = {
    clientId: '93c957a0a19c6648bfdc74ea1f63fa5a1447b0ba4d354e2de74ac6a9e5b2297d',
    clientSecret: '3175ca72e15b20574381d93c24e81e6bf7f464f60aa074684034c1bc5fe7ab7b',
    code: '053540fc694f72d0f42d069d6ef77d64de10ad95e16d6f4039904d562e79341d',
    access_token: '876cdf6a66d2dba05c89ad47e8cc3acec9bd68788ebf86f9292a40f2fd9df1d4'
}


  
    export async function getDribbblePosts(per_page: Number) {
        //IMPROVE: Remember create the interface for dribble return remove any
        try {
          const dribbbleRes = await axios.get(
            `https://api.dribbble.com/v2/user/shots?access_token=${dribbbleConfig.access_token}&page=${1}&per_page=${per_page}`,
          );
        const dribbbleInformation = dribbbleRes.data.map((dribbble: any)=>{
            return {
                id: dribbble.id,
                url: dribbble.html_url,
                title: dribbble.title,
                imageSrc: dribbble.images.two_x,
                description: dribbble.description,
            }
          })
          return dribbbleInformation
          }
          catch(e){
              console.log(e)
          }
        }
