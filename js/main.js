// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAPx3hpHjQwaQKA2Axn1EVJ4MTQstw6mtg",
  authDomain: "pikadu-3c740.firebaseapp.com",
  databaseURL: "https://pikadu-3c740.firebaseio.com",
  projectId: "pikadu-3c740",
  storageBucket: "pikadu-3c740.appspot.com",
  messagingSenderId: "389358870646",
  appId: "1:389358870646:web:1d7f9fa1004e3f6217ff57"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log(firebase);

// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');

const regExpValidEmail = /^\w+@\w+\.\w{2,}$/; // валидация email

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');
const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');
const exitElem = document.querySelector('.exit');
const editElem = document.querySelector('.edit');
const editContainer = document.querySelector('.edit-container');
const editUsername = document.querySelector('.edit-username');
const editPhotoURL = document.querySelector('.edit-photo');
const userAvatarElem = document.querySelector('.user-avatar');
const postsWrapper = document.querySelector('.posts');
const buttonNewPost = document.querySelector('.button-new-post');
const addPostElem = document.querySelector('.add-post');


const listUsers = [
  {
    id: '01',
    email: 'maks@mail.com',
    password: '12345',
    displayName: 'MaksJS',
    photo:'https://gordonua.com/img/article/15263/21_tn.jpg'
  },
  {
    id: '02',
    email: 'kate@mail.com',
    password: '123456',
    displayName: 'KateKillMaks'
  },
];

const setUsers = {
  user: null,
  logIn(email, password, handler){
    if (!regExpValidEmail.test(email)){
      alert('email не валиден');
      return;
    }
    const user = this.getUser(email);
    if(user && user.password === password){
      this.authorizedUser(user);
      if(handler){
        handler();
      }
    } else {
      alert('Пользователь с такими данными не найден')
    }
  },
  logOut(handler){
    this.user = null;
    if(handler){
      handler();
    }
  },
  signUp(email, password, handler){
    if (!regExpValidEmail.test(email)){
      alert('email не валиден');
      return;
    }
    if(!email.trim() || !password.trim()){
      alert('Введите данные')
      return;
    }
    if (!this.getUser(email)){
      const user = {email, password, displayName: email.substring(0,email.indexOf('@'))}; 
      listUsers.push(user);
      this.authorizedUser(user);
      if(handler){
        handler();
      }
    } else {
      alert('Пользователь с таким email уже зарегестрирован')
    }
  },
  editUser(userName, userPhoto,handler){
    if(userName){
      this.user.displayName = userName;
    }
    if(userPhoto){
      this.user.photo = userPhoto;
    }
    if(handler){
      handler();
    }
  },
  getUser(email){
    return listUsers.find((item)=> item.email === email)
  },
  authorizedUser(user){
    this.user = user;
  }
};

const setPosts = {
  allPosts: [
    {
      title: 'Заголовок поста',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую            подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит! ',
      tags: ['свежее', 'новое','горячее','мое','случайность'],
      author: {displayName: 'maks', photo: 'https://s11.stc.all.kpcdn.net/share/i/12/10815152/inx960x640.jpg'},
      date: '11.11.2020, 20:54',
      like: 15,
      comments: 5,
    },
    {
      title: 'Заголовок поста 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi asperiores officiis, vel alias consectetur illum maiores aspernatur facere ducimus totam incidunt dignissimos vitae explicabo repudiandae. Aut, amet autem atque quis cum assumenda, neque expedita ratione commodi dicta delectus doloribus culpa id vero quasi temporibus vitae possimus fuga eius nihil a. Vel vitae totam tempora nulla, accusamus unde. Voluptatibus voluptatem, voluptas soluta consequatur, voluptate corporis quibusdam beatae natus laudantium officia aspernatur! Magnam rerum libero ullam quo nulla quod, perspiciatis non. Aspernatur nam labore libero iusto voluptatibus sapiente illo consequuntur. Delectus atque labore quos libero dolor optio, ratione placeat sint accusamus amet dolorum reprehenderit rerum ad quo, incidunt commodi doloribus voluptatem adipisci perspiciatis iure, quisquam quam molestias? Vitae blanditiis distinctio aperiam quo voluptates nulla consequuntur aliquid. Excepturi, voluptate voluptas! Quibusdam tenetur vitae at libero, similique excepturi, consectetur voluptatem veritatis nostrum minus earum neque, eius repellendus. Incidunt officiis distinctio nostrum, odio iste ullam? Eaque labore in error maxime neque omnis, mollitia esse quibusdam repellendus ea atque perspiciatis veritatis. Repellendus voluptates expedita a veniam sit provident aut quos non? Veritatis porro labore necessitatibus, quibusdam tempora hic quas, consectetur et voluptates consequuntur minus, fuga illo quia delectus fugiat adipisci? Consectetur assumenda exercitationem cum! Qui, soluta!',
      tags: ['свежее','новое','мое','случайность'],
      author: {displayName: 'kate', photo: 'https://i.pinimg.com/736x/62/63/26/626326d65ac8f5b941f86964f1afb7c2.jpg'},
      date: '10.11.2020, 10:54',
      like: 45,
      comments: 12,
    },
    {
      title: 'Заголовок поста 3',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Снова, большой знаках? Своих переулка составитель власти рыбного использовало журчит, одна которое агентство ее свой парадигматическая если предложения образ но пунктуация меня собрал коварных его путь букв диких пустился встретил пояс? Грамматики ipsum толку, инициал буквоград текст выйти себя рыбными рукопись предупреждал семантика вскоре прямо до, жизни рот живет эта гор путь это составитель имени грустный лучше языкового! Буквенных ведущими путь, меня lorem грустный использовало, это даже повстречался дороге до послушавшись, ручеек текста. Если залетают правилами ее, точках то заманивший страну имени, парадигматическая маленькая, подзаголовок рекламных страна возвращайся? Рыбного, пояс.',
      tags: ['новое','горячее', 'мое','случайность'],
      author: {displayName: 'roma', photo:'https://gordonua.com/img/article/15263/21_tn.jpg'},
      date: '19.09.2020, 18:04',
      like: 10,
      comments: 7,
    }
  ],
  addPost(title, text, tags, handler){
    this.allPosts.unshift({
      title,
      text,
      tags: tags.split(', ').map(item => item.trim()),
      author: {
        displayName: setUsers.user.displayName,
        photo: setUsers.user.photo
      },
      date: new Date().toLocaleString(),
      like: 0,
      comments: 0,
    });

    if(handler){
      handler();
    };
  }
};

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log('user: ',user);

  if(user){
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
    userAvatarElem.src = user.photo || userAvatarElem.src
    buttonNewPost.classList.add('visible');
  } else {
    loginElem.style.display = '';
    userElem.style.display = 'none';
    buttonNewPost.classList.remove('visible');
    addPostElem.classList.remove('visible');
    postsWrapper.classList.add('visible');
  }
};

const showAddPost = () => {
  addPostElem.classList.add('visible');
  postsWrapper.classList.remove('visible');
}

const showAllPost = () => {

  let postsHTML = '';
  setPosts.allPosts.forEach(({title, text, date, tags, like, comments, author}) => {
    postsHTML += `
      <section class="post">
        <div class="post-body">
          <h2 class="post-title">${title}</h2>
          <p class="post-text">${text}</p>
          <div class="tags">
            ${tags.map(tag => `<a href="#" class="tag">#${tag}<a>`)}
          </div>
        </div>
        <div class="post-footer">
          <div class="post-buttons">
            <button class="post-button likes">
              <svg width="19" height="20" class="icon icon-like">
                <use xlink:href="img/icons.svg#like"></use>
              </svg>
              <span class="likes-counter">${like}</span>
            </button>
            <button class="post-button comments">
              <svg width="21" height="21" class="icon icon-comment">
                <use xlink:href="img/icons.svg#comment"></use>
              </svg>
              <span class="comments-counter">${comments}</span>
            </button>
            <button class="post-button save">
              <svg width="19" height="19" class="icon icon-save">
                <use xlink:href="img/icons.svg#save"></use>
              </svg>
            </button>
            <button class="post-button share">
              <svg width="17" height="19" class="icon icon-share">
                <use xlink:href="img/icons.svg#share"></use>
              </svg>
            </button>
          </div>
          <div class="post-author">
            <div class="author-about">
              <a href="#" class="author-username">${author.displayName}</a>
              <span class="post-time">${date}</span>
            </div>
            <a href="#" class="author-link"><img src=${author.photo || "img/avatar.jpeg"} alt="avatar" class="author-avatar"></a>
          </div>
        </div>
      </section>
    `;
  });
  postsWrapper.innerHTML = postsHTML;

  addPostElem.classList.remove('visible');
  postsWrapper.classList.add('visible');
};


const init = () => {
  loginForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    setUsers.logIn(emailValue, passwordValue, toggleAuthDom);
    loginForm.reset();
  });

  loginSignup.addEventListener('click', event => {
    event.preventDefault();

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    setUsers.signUp(emailValue, passwordValue, toggleAuthDom);
    loginForm.reset();
  });

  exitElem.addEventListener('click', event =>{
    event.preventDefault();
    setUsers.logOut(toggleAuthDom);
  });

  editElem.addEventListener('click', event => {
    event.preventDefault();
    editContainer.classList.toggle('visible');
    editUsername.value = setUsers.user.displayName;
  });

  editContainer.addEventListener('submit', event => {
    event.preventDefault();
    setUsers.editUser(editUsername.value,editPhotoURL.value,toggleAuthDom);
    editContainer.classList.remove('visible');
  });
  // отслеживаем клик по кнопке меню и запускаем функцию
  menuToggle.addEventListener('click', function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню, когда кликнули по кнопке меню 
    menu.classList.toggle('visible');
  });

  buttonNewPost.addEventListener('click', event =>{
    event.preventDefault();
    showAddPost();
  });

  addPostElem.addEventListener('submit', event => {
    event.preventDefault();
    const {title, text, tags} = addPostElem.elements;
    
    if(title.value.length < 6){
      alert('Слишком короткий заголовок');
      return;
    }
    if(text.value.length < 30){
      alert('Слишком короткий пост');
      return;
    }

    setPosts.addPost(title.value, text.value, tags.value, showAllPost);
    addPostElem.classList.remove('visible');
    addPostElem.reset();
  });

  showAllPost();
  toggleAuthDom();
};

document.addEventListener('DOMContentLoaded', init);