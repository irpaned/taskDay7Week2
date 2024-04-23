const testimonials = [

    {
        image : "https://images.pexels.com/photos/1496647/pexels-photo-1496647.jpeg?auto=compress&cs=tinysrgb&w=600",
        quotes : "Kamu keren!",
        author : "- Albert",
        rating : 1
    },
    {
        image : "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=600",
        quotes : "Sangat membantu",
        author : "- John",
        rating : 2
    },
    {
        image : "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=600",
        quotes : "Sangat membantu",
        author : "- John",
        rating : 2
    },
    {
        image : "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=600",
        quotes : "Sangat membantu",
        author : "- John",
        rating : 3
    }

    
]



function allTestimonial () {
       
       // Pakai map
       const testimonialHTML = testimonials.map((testimonial) => {
           return `
           <div class="card">
               <div class="image">
                   <img src="${testimonial.image}" alt="">
               </div>
               <div class="quotes">
                   <p>"${testimonial.quotes}"</p>
               </div>
               <div class="author">
                   <h4>${testimonial.author}</h4>
               </div>
               <div class="rating">
                    ${testimonial.rating} <i class="fa-solid fa-star"></i>
                </div>  
           </div>
           `
       })
       
       document.getElementById("myTestimonials").innerHTML = testimonialHTML.join("")
       
       // Pakai forEach
       
    //    let testimonialHTML = ``
       
    //    testimonials.forEach((testimonial, index) => {
    //        testimonialHTML += `
    //        <div class="card">
    //             <div class="image">
    //                 <img src="${testimonial.image}" alt="">
    //             </div>
    //             <div class="quotes">
    //                 <p>"${testimonial.quotes}"</p>
    //             </div>
    //             <div class="author">
    //                 <h4>${testimonial.author}</h4>
    //             </div>
    //             <div class="rating">
    //                 <p>${testimonial.rating}<i class="fa-solid fa-star"></i></p>
    //             </div>
    //         </div> 
    //        `
    //    })
       
    //    document.getElementById("myTestimonials").innerHTML = testimonialHTML
}



function filterTestimonial(rating) {
    
    const filteredTestimonial = testimonials.filter(testimonial => testimonial.rating == rating)

    if(filteredTestimonial <= 0) {  
        return document.getElementById("myTestimonials").innerHTML = `<h1>Data not found</h1>`
    }

    const testimonialHTML = filteredTestimonial.map((testimonial) => {
            return `
            <div class="card">
                <div class="image">
                    <img src="${testimonial.image}" alt="">
                </div>
                <div class="quotes">
                    <p>"${testimonial.quotes}"</p>
                </div>
                <div class="author">
                    <h4>${testimonial.author}</h4>
                </div>
                <div class="rating">
                     ${testimonial.rating} <i class="fa-solid fa-star"></i>
                 </div>
            </div>
            `
    });
            

    document.getElementById("myTestimonials").innerHTML = testimonialHTML.join("")
} 




allTestimonial();

