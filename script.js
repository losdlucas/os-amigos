// Abrir modais
document.getElementById('forgotPasswordLink').addEventListener('click', function (e) {
  e.preventDefault();
  toggleModal('forgotPasswordModal');
});

// Função para abrir/fechar modais
function toggleModal(id) {
  const modal = document.getElementById(id);
  modal.classList.toggle('show');
}

// Submeter nova senha
document.getElementById('submitNewPassword').addEventListener('click', function () {
  const newPass = document.getElementById('newPasswordInput').value;
  const confirmPass = document.getElementById('confirmPasswordInput').value;
  const msg = document.getElementById('passwordResetMsg');

  if (newPass && newPass === confirmPass) {
    msg.textContent = "Senha trocada com sucesso!";
    msg.style.color = "#0f0";
  } else {
    msg.textContent = "As senhas não coincidem!";
    msg.style.color = "#f00";
  }
});

// Submeter criação de conta
document.getElementById('submitCreateAccount').addEventListener('click', function () {
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('newEmail').value;
  const pass = document.getElementById('newUserPassword').value;
  const confirmPass = document.getElementById('confirmNewUserPassword').value;
  const terms = document.getElementById('acceptTerms').checked;
  const msg = document.getElementById('accountMsg');

  if (!fullName || !email || !pass || !confirmPass) {
    msg.textContent = "Preencha todos os campos!";
    msg.style.color = "#f00";
  } else if (pass !== confirmPass) {
    msg.textContent = "As senhas não coincidem!";
    msg.style.color = "#f00";
  } else if (!terms) {
    msg.textContent = "Você precisa aceitar os termos.";
    msg.style.color = "#f00";
  } else {
    msg.textContent = "Conta criada com sucesso!";
    msg.style.color = "#0f0";
  }
});
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});
// Validação de login
document.querySelector('.login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim().toLowerCase();
  const senha = document.getElementById('password').value;

  if (email === 'mariosclaudios@gmail.com' && senha === 'AMIGOS') {
    window.location.href = 'home.html';
  } else {
    alert('Email ou senha incorretos!');
  }
});
