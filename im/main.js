$(document).ready(function () {
  const url = new URL(window.location.href)
  if (url.pathname === "/contact-us/"){
    $('.footer_subscribe').remove();
  }
  $('.dropdown-item').each(function(){
    if( $(this).hasClass('disabled-link') ) {
      $(this).addClass('disabled');
    }
  })

  let postlink = $('.post_body_footer_bottom .post_link');

  if( postlink.length == 1 ) {
    $('.post_body_footer_bottom .post_link.next_post').css('margin-left','auto');
  }

  $('.media-main__tabs .nav-link').on('click',function(e){
    e.preventDefault();

    $('.media-main__tabs .nav-link').removeClass('active');
    $(this).addClass('active');

  })

  $('.tab-load-more .link-contact').on('click',function(e){
    e.preventDefault();
  })

  $('.signature-card__link').on('click',function(){

    let parent = $(this).parent();
    $(parent).toggleClass('active');

    if($(parent).hasClass('active')) {
      $(parent).find('.signature_droptext').slideDown();
      $(this).text('Read less');
    } else {
      $(parent).find('.signature_droptext').slideUp();
      $(this).text('Read more');
    }
  });

  $('.link-contact.chutzpah-link').click(function(e) {
    e.preventDefault()

    let w = $(window).width();

    if ( w <= 768 ) {
      $('html, body').animate({
          scrollTop: $("#order-book").offset().top - 50
      }, 1000);
    } else {
      $('html, body').animate({
          scrollTop: $("#order-book").offset().top
      }, 1000);
    }

  });

  function isMacintosh() {
    let mac = navigator.platform.indexOf('Mac') > -1;
    let iOS = navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

    if( mac ) {
      $('.header-wrapper.aproach').css('background','rgb(238,250,242)');
    }

  }

  isMacintosh();

  let btn = $(".back-top");
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  $(".menu-btn").click(function (event) {
    $(".menu-btn,.navbar").toggleClass("active");
    $("body").toggleClass("lock");
  });

  let header = $(".header-wrapper").css("background");
  $(".header, .navbar").css("background", header);



  function cutText() {
    const size = 201;

    $('.media-card').each(function(){
      let newsContent = $(this).find('.card-text');
      let newsText = newsContent.text();

      if (newsText.length >= size) {
        newsContent.text(newsText.slice(0, size) + "...");
      }

    });

  }

  cutText();

  $(".speaking-slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $(".moments-sliders").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //acardeon

  $(function () {
    var Accordion = function (el, multiple) {
      this.el = el || {};
      // more then one submenu open?
      this.multiple = multiple || false;

      var dropdownlink = this.el.find(".dropdownlink");
      dropdownlink.on(
        "click",
        { el: this.el, multiple: this.multiple },
        this.dropdown
      );
    };

    Accordion.prototype.dropdown = function (e) {
      var $el = e.data.el,
        $this = $(this),
        //this is the ul.submenuItems
        $next = $this.next();

      $next.slideToggle();
      $this.parent().toggleClass("open");

      if (!e.data.multiple) {
        //show only one menu at the same time
        $el
          .find(".submenuItems")
          .not($next)
          .slideUp()
          .parent()
          .removeClass("open");
      }
    };

    var accordion = new Accordion($(".accordion-menu"), false);
  });

  $(".latest_articles .articles_list").slick({
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          variableWidth: true,
        },
      },
    ],
  });

  $(".single-blog .related_articles .articles_list").slick({
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          variableWidth: true,
        },
      },
    ],
  });




  // $(".latest_articles .articles_list").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   // autoplay: true,
  //   autoplaySpeed: 2000,
  //   variableWidth: true,
  // })


$(".press-materials__cards ").slick({
  responsive: [
    {
      breakpoint: 3300,
      settings: "unslick",
    },

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
      },
    },

    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
    autoplaySpeed: 2000,
        variableWidth: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    autoplaySpeed: 2000,
        variableWidth: true,
      },
    },
  ],
});

$(".dictionary-wrapper").slick({
  responsive: [
    {
      breakpoint: 3300,
      settings: "unslick",
    },

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    autoplaySpeed: 2000,
        variableWidth: true,
      },
    },

    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    autoplaySpeed: 2000,
        variableWidth: true
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    autoplaySpeed: 2000,
        variableWidth: true,

      },
    },
  ],
});

$(".keynotes-wrapper ").slick({
  responsive: [
    {
      breakpoint: 3300,
      settings: "unslick",
    },

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        variableWidth: true,

      },
    },

    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
    autoplaySpeed: 2000,
        variableWidth: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    autoplaySpeed: 2000,
        variableWidth: true,
      },
    },
  ],
});

$(".global-speaker__country-card").slick({
  responsive: [
    {
      breakpoint: 3300,
      settings: "unslick",
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },

  ],
});

function getWindowWidth() {
  return window.innerWidth || document.body.clientWidth;
}

if (getWindowWidth() <= 768) {

  Revealator.effects_padding = '-200';

  $('.main__about .card-body p br, .principles-card__text p br').remove();


    let trBottom =  $('#transcription-bottom');
    let trTop = $('#transcription-top');
    let card = $(' #transcription-bottom .dictionary-card').detach();
    // let galleryCol2 = $('#gallery-col-2 .join-gallery__img').detach();
    // let galleryCol3 = $('#gallery-col-3 .row-top .col');
    trTop.append(card);
    // galleryCol3.append(galleryCol2);


}

$("#transcription-top").slick({
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick",
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
      },
    },

  ],
});



if(getWindowWidth() > 768) {
  window.onload = function() {
    $('.nav-item.dropdown').on('mouseover',function(e){

      if ($(this).find('.dropdown-menu').is(":hidden")){
        $(this).find('.dropdown-toggle').dropdown('toggle');
      }

    });

    $('.nav-item.dropdown').on('mouseleave',function(e){

      if (!$(this).find('.dropdown-menu').is(":hidden")){
        $(this).find('.dropdown-toggle').dropdown('toggle');
      }

    });

  }
}



if(getWindowWidth() <= 1025) {
  window.onload = function() {
    let galleryCol2 = $('#gallery-col-2 .join-gallery__img').detach();
    let galleryCol3 = $('#gallery-col-3 .row-top .col');
    galleryCol3.append(galleryCol2);
  }
}

$('.in_touch_form form').validate({
  submitHandler: function(form, event) {

    event.preventDefault();
    $.ajax({
      url: ajaxurl,
      type:'POST',
      data:'action=add_contact&' + $(form).serialize() ,
      success:function(results)
      {
          window.location.href = results;
      }
    });
  }
});

$('.special_contact_form form').validate({
  submitHandler: function(form, event) {

    event.preventDefault();
    $.ajax({
      url: ajaxurl,
      type:'POST',
      data:'action=add_contact&' + $(form).serialize() ,
      success:function(results)
      {
          window.location.href = results;
      }
    });
  }
});

$('.post_contact_wrapper').validate({
submitHandler: function(form, event) {
  event.preventDefault();
  let email =$($(form).find('input[type="email"]')[0]).val();
  console.log(email);
  $.ajax({
    url:ajaxurl,
    type:'POST',
    data:'action=add_to_mailchimp&email=' + email,
    success:function(results)
    {
      $('.mailchimp-form').after(results);
    }
  });
}
});

$('#footer_subscribe').validate({
  submitHandler: function(form, event) {
    event.preventDefault();
    let email = $('#footer_subscribe').find('#footer_subs_email');
    $.ajax({
      url:ajaxurl,
      type:'POST',
      data:'action=add_to_mailchimp&email=' + $(email).val() ,
      success:function(results)
      {
        $('#footer_subscribe').hide();
        $('.footer_subscribe_success').addClass('active');

        setTimeout(function(){
          $('.footer_subscribe_success').removeClass('active');
          $('#footer_subscribe').show();
        },5000);
      }
    });
  }
  });

$('.join-form__form').validate({
  submitHandler: function(form, event) {
    event.preventDefault();
    $.ajax({
      url: ajaxurl,
      type:'POST',
      data:'action=join_team&' + $(form).serialize() ,
      success:function(results)
      {
        window.location.href = results;
      }
    });
  }
});

 // BLOG POSTS

 $.getJSON( templateUrl + "/json/post.json", function( data ) {

  let dataPosts = Object.values(data);
  let posts = [];

  let loadedPosts = [];

  var _document$querySelect;

(_document$querySelect = document.querySelector('.blog-page')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.querySelectorAll('.art_text').forEach(post => loadedPosts.push(post.text.trim()));

  let filteredPost = dataPosts.filter((post) => {
    if (loadedPosts.includes(post.post_data.post_title)) {
      return false
    }else {
      return true
    }
  })

  $('.main__articles .link-contact.blog-page').on('click',function(){

    let tempScrollTop = $(window).scrollTop();

    for (let i = 0; i <= 8; i++) {
      posts.push(filteredPost.pop());
      if(filteredPost.length == 0) {
        $('.main__articles .link-contact').remove();
        break;
      }
    }

    posts.forEach(element => {

      let postBody = '<div class="article-item col-12 col-md-6 col-lg-4 revealator-slideright revealator-delay0 revealator-once"><div class="article_image"><img src="' + element.fields.post_main_image.sizes.blog_posts + '" alt=""></div><div class="article_body"><a href="' + element.url + '" class="article_text art_text">'+ element.post_data.post_title +'</a><div class="article_author"><div class="author_line"></div><p class="author_name">By Inbal Arieli</p></div></div></div>';

      $('.articles_list').append(postBody);

    });

    posts = [];

    $(window).scrollTop(tempScrollTop);
    $(window).trigger('scroll');

  });

});

///////////////////////

  // PRESS POSTS

  $.getJSON( templateUrl + "/json/press.json", function( data ) {

    let dataPress = Object.values(data);

    let pressPosts = [];
    //let filterButtons = document.querySelector('.media-main__wrapper').querySelectorAll('.nav-link');

    function loadPosts() {

      let loadedPressIds = [];
      let currentButton = document.querySelector('.media-main__wrapper').querySelector('.nav').querySelector('.active').text

      document.querySelector('.media-main__tabs').querySelectorAll('.card-body').forEach((post) => loadedPressIds.push(Number(post.getAttribute('data-post-id'))))

      let filteredPress = dataPress.filter((post) => {
        switch(currentButton){
          case 'All':
            if (loadedPressIds.includes(post.post_data.ID) || post.fields.press_writter == 'Inbal Arieli') {
              return false
            }else {
              return true
            }
          case 'Articles':
            if (loadedPressIds.includes(post.post_data.ID) || post.fields.press_type !== 'Article' || post.fields.press_writter == 'Inbal Arieli') {
              return false
            }else {
              return true
            }
          case 'Foreign Languages':
            if (loadedPressIds.includes(post.post_data.ID) || post.fields.press_type !== 'Foreign Languages') {
              return false
            }else {
              return true
            }
          case 'Podcasts':
            if (loadedPressIds.includes(post.post_data.ID) || post.fields.press_type !== 'Podcast') {
              return false
            }else {
              return true
            }
          case 'TV':
            if (loadedPressIds.includes(post.post_data.ID) || post.fields.press_type !== 'TV') {
              return false
            }else {
              return true
            }
          case 'Written by Inbal':
            if (loadedPressIds.includes(post.post_data.ID) || post.fields.press_writter !== 'Inbal Arieli') {
              return false
            }else {
              return true
            }

        }
      })


      for (let i = 0; i <= 3; i++) {
        pressPosts.push(filteredPress.pop());
        if(filteredPress.length == 0) {
          break;
        }
      }


      pressPosts.forEach(element => {

        var _element, _element$fields, _element$fields$press, _element2, _element2$post_data, _element3, _element3$terms, _element3$terms$press, _element4, _element4$fields, _element5, _element5$fields, _element6, _element6$fields, _element7, _element7$post_data, _element8, _element8$fields, _element9, _element9$fields;

        let postBody = `<div class="card media-card "><div class="row no-gutters"><div class="col-lg-5"><img src="${(_element = element) === null || _element === void 0 ? void 0 : (_element$fields = _element.fields) === null || _element$fields === void 0 ? void 0 : (_element$fields$press = _element$fields.press_image) === null || _element$fields$press === void 0 ? void 0 : _element$fields$press.sizes.blog_posts}" class="card-img" alt=""></div><div class="col-lg-6 offset-lg-1 col-xl-6 offset-xl-0"><div class="card-body" data-post-id="${(_element2 = element) === null || _element2 === void 0 ? void 0 : (_element2$post_data = _element2.post_data) === null || _element2$post_data === void 0 ? void 0 : _element2$post_data.ID}"><div class="card-title"><div><span class="news-category">${(_element3 = element) === null || _element3 === void 0 ? void 0 : (_element3$terms = _element3.terms) === null || _element3$terms === void 0 ? void 0 : (_element3$terms$press = _element3$terms.press_cat[0]) === null || _element3$terms$press === void 0 ? void 0 : _element3$terms$press.name}</span><p class="news-portal">${(_element4 = element) === null || _element4 === void 0 ? void 0 : (_element4$fields = _element4.fields) === null || _element4$fields === void 0 ? void 0 : _element4$fields.press_title}</p><p class="publisher-news">${(_element5 = element) === null || _element5 === void 0 ? void 0 : (_element5$fields = _element5.fields) === null || _element5$fields === void 0 ? void 0 : _element5$fields.press_writter}</p></div><p class="card-date">${(_element6 = element) === null || _element6 === void 0 ? void 0 : (_element6$fields = _element6.fields) === null || _element6$fields === void 0 ? void 0 : _element6$fields.press_date}</p></div><p class="card-name">${(_element7 = element) === null || _element7 === void 0 ? void 0 : (_element7$post_data = _element7.post_data) === null || _element7$post_data === void 0 ? void 0 : _element7$post_data.post_title}</p><p class="card-text">${(_element8 = element) === null || _element8 === void 0 ? void 0 : (_element8$fields = _element8.fields) === null || _element8$fields === void 0 ? void 0 : _element8$fields.press_abstruct}</p><a href="${(_element9 = element) === null || _element9 === void 0 ? void 0 : (_element9$fields = _element9.fields) === null || _element9$fields === void 0 ? void 0 : _element9$fields.press_link}" class="card-arrow"><img src="${templateUrl}/images/media_arrow.svg" alt="news link"></a></div></div></div></div>`;

        element !== undefined ? $('.media-main__tabs .tab-pane').append(postBody): false;

      });

      pressPosts = [];

    }


    $('.header-wrapper.press .link-contact').on('click',function(){

      let tempScrollTop = $(window).scrollTop();

      loadPosts();

      $(window).scrollTop(tempScrollTop);

    });

    function removePressFromAnotherCategory(pressType) {

      $('.media-card').remove();

      let tempScrollTop = $(window).scrollTop();

      loadPosts();

      $(window).scrollTop(tempScrollTop);

    }

    $('.media-main__wrapper .nav-link').on('click',function(){

      let linkText = $(this).text();

      removePressFromAnotherCategory(linkText);

    });


  });

  ///////////////////////

   // CATEGORY BLOG POSTS

 $.getJSON( templateUrl + "/json/post.json", function( data ) {

  let dataPosts = Object.values(data);
  let posts = [];

  let loadedPosts = [];
  let category_id = parseInt($('#category_id').val());

  var _document$querySelect;

(_document$querySelect = document.querySelector('.category-blog')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.querySelectorAll('.art_text').forEach(post => loadedPosts.push(post.text.trim()));

  let filteredPost = dataPosts.filter((post) => {
    if (loadedPosts.includes(post.post_data.post_title) || post.terms.category[0].term_id !== category_id ) {
      return false
    }else {
      return true
    }
  })

  $('.main__articles .link-contact.category').on('click',function(){

    let tempScrollTop = $(window).scrollTop();

    for (let i = 0; i <= 8; i++) {
      posts.push(filteredPost.pop());
      if(filteredPost.length == 0) {
        $('.main__articles .link-contact').remove();
        break;
      }
    }

    posts.forEach(element => {

      let postBody = '<div class="article-item col-12 col-md-6 col-lg-4 revealator-slideright revealator-delay0 revealator-once"><div class="article_image"><img src="' + element.fields.post_main_image.sizes.blog_posts + '" alt=""></div><div class="article_body"><a href="' + element.url + '" class="article_text art_text">'+ element.post_data.post_title +'</a><div class="article_author"><div class="author_line"></div><p class="author_name">By Inbal Arieli</p></div></div></div>';

      $('.articles_list').append(postBody);

    });

    posts = [];

    $(window).scrollTop(tempScrollTop);
    $(window).trigger('scroll');

  });

});

///////////////////////


  var number = document.querySelector('.number'),
      numberTop = number.getBoundingClientRect().top,
      start = +number.innerHTML, end = +number.dataset.max;

  window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > numberTop - window.innerHeight / 1.2) {
      this.removeEventListener('scroll', onScroll);
      var interval = setInterval(function() {
        number.innerHTML = ++start;
        if(start == end) {
          clearInterval(interval);
        }
      }, 50);
    }
  });
  var number1 = document.querySelector('.number1'),
      number1Top = number1.getBoundingClientRect().top,
      start1 = +number1.innerHTML, end1 = +number1.dataset.max;

  window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > number1Top - window.innerHeight / 1.2) {
      this.removeEventListener('scroll', onScroll);
      var interval1 = setInterval(function() {
        number1.innerHTML = ++start1;
        if(start1 == end1) {
          clearInterval(interval1);
        }
      }, 5);
    }
  });

  var number3 = document.querySelector('.number3'),
      number3Top = number3.getBoundingClientRect().top,
      start3 = +number3.innerHTML, end3 = +number3.dataset.max;

  window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > number3Top - window.innerHeight / 1.2) {
      this.removeEventListener('scroll', onScroll);
      var interval3 = setInterval(function() {
        number3.innerHTML = ++start3;
        if(start3 == end3) {
          clearInterval(interval3);
        }
      }, 5);
    }
  });

});





