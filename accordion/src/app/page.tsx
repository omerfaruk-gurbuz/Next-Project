"use client"
import * as cheerio from 'cheerio';
import axios from 'axios'

export default function Home() {

  const url = `https://connekthq.com/wp-admin/admin-ajax.php?action=alm_get_posts&query_type=standard&id=&post_id=12443&slug=infinite-scroll&canonical_url=https%253A%252F%252Fconnekthq.com%252Fplugins%252Fajax-load-more%252Fexamples%252Finfinite-scroll%252F&offset=0&post_type=ajax_more&repeater=default&seo_start_page=1&preloaded=true&preloaded_amount=3&order=DESC&orderby=date`

  const performScraping = async () => {
    console.log("in the func")
    const axiosResponse = await axios.request({
        method: "GET",
        url: url,
        // headers: {
        //     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
        // }
    })
    const $ = cheerio.load(axiosResponse.data)
     const element = $(".alm-listing.alm-ajax")
     element.find(".alm-item").each((index, e)=>{

        const pageUrl = $(e).attr("href")
        const image = $(e).find(".elementor-image-box-img img").attr("data-lazy-src")
        const name = $(e).find(".elementor-image-box-content .elementor-image-box-title").text()

     })

    console.log("scraped data", element)
}

  return (
<main>
    <button onClick={()=>performScraping} className='bg-blue-300 h-32 w-full flex justify-center items-cente hover:bg-red-500'>press the button</button>
</main>
  )
}
