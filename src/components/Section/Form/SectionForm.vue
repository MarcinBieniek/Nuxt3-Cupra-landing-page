<template>
  <section :class="$style.container">
    <div :class="$style.formBox">
      <h1>Jazda próbna</h1>
      <h2>Umów się na bezpłatną jazdę próbną</h2>

      <form :class="$style.form">

        <div :class="$style.formSelect">
          <div :class="$style.option">
            <NuxtImg :src="select[0].img" :class="$style.image"/>
            <p>{{ select[0].title }}</p>
            <NuxtImg src="/icons/arrow-down.svg" :class="$style.icon"/>
          </div>
        </div>

        <div :class="$style.formInputs">

          <div :class="$style.formInputsField">
            <input
              type="text"
              required
              placeholder="Imię *"
              v-model="formData.firstName"
            >
            <span>error</span>
          </div>

          <div :class="$style.formInputsField">
            <input
              type="text"
              required
              placeholder="Nazwisko (opcjonalnie)"
              v-model="formData.lastName"
            >
          </div>

          <div :class="$style.formInputsField">
            <input
              type="email"
              required
              placeholder="Adres e-mail *"
              v-model="formData.email"
            >
          </div>

          <div :class="$style.formInputsField">
            <input
              type="text"
              required
              placeholder="Nr telefonu *"
              v-model="formData.phone"
            >
          </div>

        </div>

        <div :class="$style.checkbox">
          <p>Wysłanie uzupełnionego formularza oznacza Twoją zgodę na kontakt w celu przedstawienia informacji handlowej w wybrany przez Ciebie sposób w związku Czytaj więcej</p>
          <p>Prosimy Cię też o wyrażenie poniższych zgód w celu możliwości przedstawiania Ci atrakcyjnych ofert / promocji produktów, akcesoriów i usług marki CUPRA w przyszłości.</p>

          <div :class="$style.checkboxBox">
            <input type="checkbox" id="check-agreement" v-model="agreementChecked"/>
            <label for="check-agreement">Zgadzam się na przetwarzanie moich danych osobowych przez Plichta spółka z ograniczoną odpowiedzialnością Spółka Komandytowa w celu przedstawienia mi informacji marketingowych i handlowych dotyczących produktów i usług marki CUPRA oraz innych powiązanych z marką CUPRA akcesoriów, produktów i usług motoryzacyjnych za pomocą:</label>
          </div>
          <div :class="$style.checkboxBox">
            <input type="checkbox" id="check-email" :disabled="!agreementChecked"/>
            <label for="check-email">E-mail</label>
          </div>
          <div :class="$style.checkboxBox">
            <input type="checkbox" id="check-phone" :disabled="!agreementChecked"/>
            <label for="check-phone">Telefon</label>
          </div>
          <div :class="$style.checkboxBox">
            <input type="checkbox" id="check-sms" :disabled="!agreementChecked"/>
            <label for="check-sms">Wiadomość SMS/MMS</label>
          </div>

          <p>Masz prawo do wglądu, modyfikacji, ograniczenia przetwarzania i usunięcia swoich danych oraz do wycofania  w każdym momencie swojej zgody.</p>
          <p>Twoje dane będą przetwarzane tylko w stopniu umożliwiającym realizację wymienionego celu.</p>
          <p>Administratorem Twoich danych jest Plichta spółka z ograniczoną odpowiedzialnością Spółka Komandytowa,  z siedzibą w Wejherowie przy ulicy Gdańskiej 13c. Zapraszamy do zapoznania się z naszą polityką prywatności umieszczoną pod linkiem: <span>https://www.plichta.com.pl/polityka-prywatnosci</span></p>
        </div>

        <BaseButtonBlack title="Umów jazdę próbną" type="submit" />

      </form>
    </div>
  </section>
</template>

<script setup lang="ts">

declare type selectType = {
  id: number,
  img: string;
  title: string;
  arrow?: string;
}

const select: selectType[] = [
  {
    id: 1,
    img: '/select/01-CupraFormentor.png',
    title: 'Cupra Formentor'
  },
  {
    id: 2,
    img: '/select/02-CupraLeon.png',
    title: 'Cupra Leon',
  },
  {
    id: 3,
    img: '/select/03-CupraLeonSportstourer.png',
    title: 'Leon Sportstourer',
  },
  {
    id: 4,
    img: '/select/04-CupraAteca.png',
    title: 'Cupra Ateca'
  },
  {
    id: 5,
    img: '/select/05-NowaCupraBorn.png',
    title: 'Nowa Cupra Born'
  },
]

// form data

const formData = reactive({
  firstName: '',
  lastName: '',
  phone: '',
  email: ''
});

import { ref } from 'vue';

const agreementChecked = ref(false);

</script>

<style lang="scss" module>
@import '@/assets/scss/main.scss';
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .formBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 80px 0;
    color: $black;

    h1 {
      margin: 0;
      font-size: 16px;
      line-height: 26px;
      margin: 0 0 10px 0;
      padding: 0;
    }

    h2 {
      margin: 0 0 40px 0;
      font-size: 36px;
      max-width: 436px;
      text-align: center;
      font-family: $font-light;
    }

    .form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

  // to do

      .formSelect {
        width: 80vw;
        max-width: 553px;
        height: 145px;
        background-color: $mid-gray;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: relative;

        .option {
          width: 503px;
          height: 100%;
          border: 1px solid $underline-gray;
          display: flex;
          justify-content: flex-end;
          align-items: center;

          .image {
            position: absolute;
            left: 0;
            top: 5%;
            width: 306px;
          }

          p {
            margin-right: 100px;
          }

          .icon {
            height: 10px;
            width: 10px;
            margin-right: 10px;
          }
        }
      }

  // to do end
      .formInputs {
        margin: 40px 0;

        .formInputsField {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          input {
            margin: 20px 0;
            width: 80vw;
            max-width: 553px;
            background-color: inherit;
            border: none;
            border-bottom: 1px solid $underline-gray;
            line-height: 21px;
            padding-bottom: 10px;
            color: $black;
          }

          span {
            position: absolute;
            color: $error-red;
            right: 0;
            bottom: 0;
            font-size: 13px;
          }
        }
      }

      .checkbox {
        width: 80wv;
        max-width: 670px;
        font-size: 13px;
        line-height: 21px;
        margin: 0 0 40px 0;

        .checkboxBox {
          display: flex;
          align-items: center;
          position: relative;

          input {
            margin: 0 10px 0 0;
            appearance: none;
            width: 20px;
            height: 20px;
            border: 1px solid $underline-gray;
            background-color: inherit;

            &:checked {
              border: 2px solid $white;
              background-color: $checkbox-checked;
            }
          }

          label {
            margin: 8px 0 10px 0;
          }

          &:first-of-type input {
            position: absolute;
            top: 0;
            left: 0;
            margin: 0 15px 0 0;
            width: 20px;
            height: 20px;
          }

          &:first-of-type label {
            margin: 0 0 15px 32px;
          }
        }

        p {
          span {
            text-decoration: underline rgba(0, 0, 0, 0);
            transition: text-decoration-color 300ms;
            cursor: pointer;

            &:hover {
              text-decoration-color: $font-black;
            }
          }
        }
      }
    }
  }
}

  /* Media queries*/

  @media screen and (max-width: 688px) {
    .container .formBox .form .formSelect .option p {
      margin-right: 20px;
    }
  }

</style>