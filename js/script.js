$(document).ready(function() {
  
  // toggle
  $('.mobile-toggle').click(function() {
	$('nav').toggle(1);
	$(this).toggleClass("mobile-toggle-sel");
  });
    
  $('.gear-icon').click(function() {
	$('.top-menu').toggle(1);
	$(this).toggleClass("fa-cog-sel");
  });
  $('.top-menu').mouseleave(function() {
	$('.top-menu').fadeOut('fast');
	$('.gear-wrapp a i').removeClass("fa-cog-sel");
  });
    
  $('.bfakt').click(function() {
	$('.nova-fakt').toggle(1);
	$(this).toggleClass("bfakt-sel");
  });
  $('.nova-fakt').mouseleave(function() {
	$('.nova-fakt').fadeOut('fast');
	$('.button').removeClass("bfakt-sel");
  });
    
  $('.icon-spots').click(function() {
    $(this).closest(".icon-wrapp").find('.icon-wrapp-dd').toggle();
    $(this).toggleClass("fa-ellipsis-active");
  });
    
  $('.bars-grid').click(function() {
	$('.fakts').addClass('grid');
    $('.bars-list').removeClass('active');
    $(this).addClass('active');
  });
  $('.bars-list').click(function() {
	$('.fakts').removeClass('grid');
    $('.bars-grid').removeClass('active');
    $(this).addClass('active');
  });
    
  $('.zdrv-settings a').click(function() {
    $(this).closest(".zdravstvene li article").find('.zdrv-dd-menu').toggle();
    $(this).toggleClass("fa-ellipsis-active");
  });
    
  $('.modal-cancel').click(function() {
	$('.lean-overlay, .easy-modal').fadeOut('fast');
  });
    
  // tip
  tooltip();
    
  //JCF
  jcf.replaceAll();
  
  // modal
  $('.inline').colorbox({inline:true, transition:"none"});
    
  // on off toggles
  $('.toggle').toggles({clicker:$('.clickme')});
    
  // tabs
  $(".tabs-menu a").click(function(event) {
    event.preventDefault();
    $(this).parent().addClass("current");
    $(this).parent().siblings().removeClass("current");
    var tab = $(this).attr("href");
    $(".tab-content").not(tab).css("display", "none");
    $(tab).slideDown('fast');
  });
    
});

// custom scrollbar
(function($){
    $(window).load(function(){
        $("#content-1").mCustomScrollbar({
            theme:"minimal"
        });
    });
})(jQuery);

// centered modals
$(function() {
    $('.easy-modal').easyModal({
        overlayOpacity: 0.5,
		overlayColor: "#fff"
    });
    $('.easy-modal-open').click(function(e) {
        var target = $(this).attr('href');
        $(target).trigger('openModal');
        e.preventDefault();
    });
});

// date picker
$('input.datepicker').Zebra_DatePicker({
  format: 'd.m.Y.'
});

// form validation
$().ready(function() {

    $("#login, #reset-password, #registracija, #forgot-password, #onboarding1, #onboarding2, #vlasnik, #promena-lozinke, #profil-agencije, #posalji-podatke-firme").validate({
        rules: {
            ime: "required",
            prezime: "required",
            broj: "required",
            naziv_agencije: "required",
            pun_naziv: "required",
            grad_zip: "required",
            datum: "required",
            ulica: "required",
            grad: "required",
            adresa: "required",
            pol: "required",
            strucna_sprema: "required",
            roditelj: "required",
            naslov: "required",
            poruka: "required",
            opstina: "required",
            lozinka: {
                required: true,
                minlength: 5
            },
            nova_lozinka: {
                required: true,
                minlength: 5
            },
            nova_lozinka_ponovo: {
                required: true,
                minlength: 5,
                equalTo: "#nova_lozinka"
            },
            email: {
                required: true,
                email: true
            },
            pib: {
                required: true,
                digits: true,
                minlength: 8,
                maxlength: 8
            },
            mb: {
                required: true,
                digits: true,
                minlength: 13,
                maxlength: 13
            },
            jmbg: {
                required: true,
                digits: true,
                minlength: 13,
                maxlength: 13
            },
            ziro_racun: {
                required: true,
                digits: true,
                minlength: 10
            },
            sifra_delatnosti: {
                required: true,
                digits: true,
                minlength: 3
            },
            telefon: {
                required: true,
                digits: true,
                minlength: 9
            },
            agree: "required"
        },
        messages: {
            ime: "Unesite ime.",
            prezime: "Unesite prezime.",
            lozinka: {
                required: "Unesite lozinku.",
                minlength: "Lozinka mora sadržati najmanje 5 karaktera."
            },
            nova_lozinka: {
                required: "Unesite novu lozinku.",
                minlength: "Lozinka mora sadržati najmanje 5 karaktera."
            },
            nova_lozinka_ponovo: {
                required: "Unesite ponovo novu lozinku.",
                minlength: "Lozinka mora sadržati najmanje 5 karaktera.",
                equalTo: "Unesite istu lozinku kao iznad."
            },
            pib: {
                minlength: "PIB mora sadržati 8 brojeva.",
                maxlength: "PIB mora sadržati 8 brojeva.",
                digits: "Možete uneti samo brojeve."
            },
            mb: {
                minlength: "Matični broj mora sadržati 13 brojeva.",
                maxlength: "Matični broj mora sadržati 13 brojeva.",
                digits: "Možete uneti samo brojeve."
            },
            jmbg: {
                minlength: "Matični broj mora sadržati 13 brojeva.",
                maxlength: "Matični broj mora sadržati 13 brojeva.",
                digits: "Možete uneti samo brojeve."
            },
            ziro_racun: {
                minlength: "Žiro račun mora sadržati najmanje 10 brojeva.",
                digits: "Možete uneti samo brojeve."
            },
            sifra_delatnosti: {
                minlength: "Šifra mora sadržati najmanje 3 broja.",
                digits: "Možete uneti samo brojeve."
            },
            datum: {
                required: "Izaberite datum iz tabele."
            },
            telefon: {
                required: "Niste uneli broj telefona.",
                minlength: "Broj telefona mora sadržati najmanje 9 brojeva.",
                digits: "Možete uneti samo brojeve."
            },
            broj: {
                required: "Obavezno."
            },
            email: "E-mail adresa nije validna.",
            topic: "Please select at least 2 topics."
        }
    });

    $("#modal-kontakt").validate({
        rules: {
            naslov: "required",
            poruka: "required",
            agree: "required"
        },
        messages: {
            topic: "Please select at least 2 topics."
        }
    });

    $("#modal-posalji-fakturu").validate({
        rules: {
            naslov: "required",
            poruka: "required",
            datum: "required",
            email: {
                required: true,
                email: true
            },
            agree: "required"
        },
        messages: {
            datum: {
                required: "Izaberite datum iz tabele."
            },
            email: "E-mail adresa nije validna.",
            topic: "Please select at least 2 topics."
        }
    });

    $("#modal-dodaj-komitenta").validate({
        rules: {
            ime: "required",
            adresa: "required",
            grad: "required",
            email: {
                required: true,
                email: true
            },
            pib: {
                required: true,
                digits: true,
                minlength: 8,
                maxlength: 8
            },
            telefon: {
                required: true,
                digits: true,
                minlength: 9
            },
            agree: "required"
        },
        messages: {
            datum: {
                required: "Izaberite datum iz tabele."
            },
            pib: {
                minlength: "PIB mora sadržati 8 brojeva.",
                maxlength: "PIB mora sadržati 8 brojeva.",
                digits: "Možete uneti samo brojeve."
            },
            telefon: {
                required: "Niste uneli broj telefona.",
                minlength: "Broj telefona mora sadržati najmanje 9 brojeva.",
                digits: "Možete uneti samo brojeve."
            },
            ime: "Unesite ime.",
            email: "E-mail adresa nije validna.",
            topic: "Please select at least 2 topics."
        }
    });

    $("#modal-uredi-komitenta").validate({
        rules: {
            ime: "required",
            adresa: "required",
            grad: "required",
            email: {
                required: true,
                email: true
            },
            pib: {
                required: true,
                digits: true,
                minlength: 8,
                maxlength: 8
            },
            telefon: {
                required: true,
                digits: true,
                minlength: 9
            },
            agree: "required"
        },
        messages: {
            datum: {
                required: "Izaberite datum iz tabele."
            },
            pib: {
                minlength: "PIB mora sadržati 8 brojeva.",
                maxlength: "PIB mora sadržati 8 brojeva.",
                digits: "Možete uneti samo brojeve."
            },
            telefon: {
                required: "Niste uneli broj telefona.",
                minlength: "Broj telefona mora sadržati najmanje 9 brojeva.",
                digits: "Možete uneti samo brojeve."
            },
            ime: "Unesite ime.",
            email: "E-mail adresa nije validna.",
            topic: "Please select at least 2 topics."
        }
    });

    $("#modal-uredi-zdravstvenu-knjizicu").validate({
        rules: {
            ime: "required",
            prezime: "required",
            adresa: "required",
            grad: "required",
            opstina: "required",
            jmbg: {
                required: true,
                digits: true,
                minlength: 13,
                maxlength: 13
            },
            agree: "required"
        },
        messages: {
            jmbg: {
                minlength: "Matični broj mora sadržati 13 brojeva.",
                maxlength: "Matični broj mora sadržati 13 brojeva.",
                digits: "Možete uneti samo brojeve."
            },
            ime: "Unesite ime.",
            prezime: "Unesite prezime.",
            topic: "Please select at least 2 topics."
        }
    });

    $("#modal-dodaj-zdravstvenu-knjizicu").validate({
        rules: {
            ime: "required",
            prezime: "required",
            adresa: "required",
            grad: "required",
            opstina: "required",
            jmbg: {
                required: true,
                digits: true,
                minlength: 13,
                maxlength: 13
            },
            agree: "required"
        },
        messages: {
            jmbg: {
                minlength: "Matični broj mora sadržati 13 brojeva.",
                maxlength: "Matični broj mora sadržati 13 brojeva.",
                digits: "Možete uneti samo brojeve."
            },
            ime: "Unesite ime.",
            prezime: "Unesite prezime.",
            topic: "Please select at least 2 topics."
        }
    });

});
