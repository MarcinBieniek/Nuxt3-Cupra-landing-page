<template>
  <section :class="$style.testDrive">
    <div :class="$style.container">

      <div :class="$style.header">
        <h1>Wypróbuj</h1>
        <p>Zobacz, poczuj i przekonaj się, czym jest CUPRA. Poznaj samochody, które są wyjątkowym połączeniem technologii, mocy, elegancji i komfortu.</p>
      </div>

      <div :class="$style.content">

        <div :class="$style.column1">
          <div :class="$style.imageBox">
            <NuxtImg src="/rent-1.png" :class="$style.image"/>
            <span>Design inspirowany wyścigami, stworzony z niezwykłą dbałością o detale.</span>
          </div>
          <div :class="$style.textBox">
            <h1>Tylko dla odważnych</h1>
            <p>Model CUPRA, który idealnie wpisuje się w DNA marki. Unikalny SUV coupé, wyjątkowy, odwany i innowacyjny - zapewni Ci to, co najlepsze w marce CUPRA.</p>
            <BaseButtonSand title="Umów jazdę próbną" />
          </div>
        </div>

        <div :class="$style.column2">
          <div :class="$style.imageBox">
            <NuxtImg src="/rent-2.png" :class="$style.image"/>
            <span>Podróżuj z rozmachem bez kompormisów.</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style lang="scss" module scoped>
@import '@/assets/scss/main.scss';

// general component variables

h1 {
  font-size: 60px;
  font-family: $font-light;
  margin: 0;
  text-transform: uppercase;
}

p {
  max-width: 553px;
  font-size: 20px;
  opacity: 50%;
  line-height: 24px;
  margin: 32px 0;
  font-family: $font-light;
}

span {
  opacity: 50%;
  font-family: $font-light;
}

// individual classes

.testDrive {
  background-color: $brown;

  .container {
    color: $white;
    flex-direction: column;

    .header {
      justify-content: flex-start;
      margin: 60px 0 40px 0;
    }

    .content {
      display: grid;
      grid-template-columns: 6fr 4fr;
      gap: 40px;

      .column1 {
        .imageBox {
          .image {
            height: 519px;
            width: 100%;
            object-fit: cover;
            margin-bottom: 20px;
          }
        }

        .textBox {
          margin: 160px 0 60px 0;

          h1 {
            font-size: 40px;
          }
        }
      }
      .column2 {
        .imageBox {
          .image {
            height: 737px;
            width: 100%;
            object-fit: cover;
            margin: 60px 0 20px 0;
          }
        }
      }
    }
  }
}

</style>