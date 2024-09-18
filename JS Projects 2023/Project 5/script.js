const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated_bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')


setTimeout(getData, 2500);

function getData () {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQi0jEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quam nobis dolore quae vitae, accusamus consequatur fuga ipsum sint repellat veritatis facilis illo quia ullam, perspiciatis cumque sed laboriosam maiores.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/protraits/men/45.jpg" alt="">'
    name.innerHTML = 'John Doe'
    date.innerHTML = 'Nov 15, 2023'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg-texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}