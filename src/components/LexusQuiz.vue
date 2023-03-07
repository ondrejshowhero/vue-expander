<template>
  <div class="quiz" :class="`current-${currentQuestion}`">
    <Transition name="r" mode="out-in">
      <div class="questions" v-if="quizActive">
        <div class="wrap">
          <Transition name="q">
            <div :key="currentQuestion" >
              <div class="counter">
                {{currentQuestion + 1}}/{{questions.length}}
              </div>
              <h2 class="question" v-html="questions[currentQuestion][0]"></h2>
              <div class="answers" :class="`answers-${currentQuestion}`">
                <button v-for="answer in questions[currentQuestion][1]" :key="answer" @click="answerClicked(answer)">{{answer[0]}}</button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
      <div class="result" :key="currentQuestion" v-else>
        <ExpanderCars @track="track" :items="selectedModels" />
      </div>
    </Transition>
  </div>
</template>

<script>
  import ExpanderCars from './ExpanderCars.vue'
  
  export default {
    name: 'LexusQuiz',
    components: {
      ExpanderCars,
    },
    emits: ['track'],
    props: {
      models: Array
    },
    data() {
      return {
        answers: '',
        excluded: '',
        currentQuestion: 0,
        quizActive: true,
        selectedModels: this.models,
        questions: [
          [
            'Hur långt kör du ungefär per&nbsp;dag?',
            [
              [
                '2 mil',
                'b',
                null,
                'a'
              ],
              [
                '6 mil',
                'b',
                null,
                'b'
              ],
              [
                '12 mil',
                'ac',
                null,
                'c'
              ],
            ],
          ],
          [
            'Har du möjlighet att ladda din bil hemma eller på jobbet?',
            [
              [
                'Ja',
                'b',
                null,
                'a'
              ],
              [
                'Nej',
                'ac',
                'b',
                'b'
              ],
            ],
          ],
          [
            'Vad är viktigast när du ska köpa en ny bil?',
            [
              [
                'Stark motor',
                'c',
                null,
                'a'
              ],
              [
                'Bränslesnål',
                'a',
                null,
                'b'
              ],
              [
                'Möjlighet att köra långt på enbart eldrift',
                'b',
                null,
                'c'
              ],
            ],
          ],
          [
            'Hur ser du på ditt<br>bilägande?',
            [
              [
                'Jag älskar att köra bil',
                'c',
                null,
                'a'
              ],
              [
                'Bilen gör mitt liv bekvämt',
                'b',
                null,
                'b'
              ],
              [
                'Bilen är ett transportmedel',
                'a',
                null,
                'c'
              ],
            ],
          ],
        ],
      }
    },
    methods: {
      answerClicked(answer) {
        if (this.currentQuestion == 0)
          this.track('quiz-started')
        this.track(`quiz-answer-${this.currentQuestion + 1}-${answer[3]}`)
        this.currentQuestion++
        this.answers += answer[1]
        if (answer[2])
          this.excluded += answer[2]
        if (this.currentQuestion == this.questions.length)
          this.finishQuiz()
      },
      finishQuiz() {
        this.track('quiz-completed')
        let excluded = Array.from(this.excluded)
        excluded.forEach(char => {
          let re = new RegExp(char,"g");
          this.answers = this.answers.replace(re,'')
        })
        this.quizActive = false
        let counts = [this.answers.split("a").length - 1, this.answers.split("b").length - 1,this.answers.split("c").length - 1 ]
        let max = Math.max(...counts)
        this.selectedModels = []
        counts.forEach((item, index) => {
          if(item == max)
            this.selectedModels.push(this.models[index])
        })
        this.selectedModels.forEach(item => {
          this.track(`quiz-result-${item[5]}`)
        })
      },
      track(label) {
        this.$emit('track', label)
      }
    },
  }
</script>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .quiz {
    position: relative;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 1;
      width: 66%;
      height: 8rem;
      background: url('../assets/quiz-bg.png') no-repeat center center / 100% 100%;
      transition: .5s;
      @include d {
        height: 100%;
      }
    }
    &.current-1 {
      &::before {
        width: 70%;
      }
    }
    &.current-2 {
      &::before {
        width: 98%;
      }
    }
    &.current-3 {
      &::before {
        width: 113%;
      }
    }
    &.current-4 {
      &::before {
        width: 120%;
        height: 7.5rem;
        bottom: auto;
        top: 0;
      }
    }
    @include m {
      &.current-2,
      &.current-3 {
        &::before {
          height: 14rem;
        }
      }
    }
  }
  .questions {
    position: relative;
    width: 100%;
    z-index: 2;
    padding: 1rem 1rem;
    @include d {
      height: 18.75rem;
      padding: 1rem 5rem 2.25rem 9.375rem;
    }
    .wrap {
      position: relative;
    }
    .counter {
      margin-bottom: .125rem;
      font-size: 1.125rem;
      font-weight: 300;
    }
    .question {
      position: relative;
      width: 23rem;
      margin-bottom: 3.625rem;
      font-size: 1.5rem;
      font-weight: normal;
      line-height: 1.15;
      @include d {
        font-size: 2rem;
      }
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -1.875rem;
        width: 6rem;
        height: 1px;
        border-bottom: 1px solid #fff;
      }
    }
    .answers {
      padding: 2rem 1.25rem 1.5rem;
      @include d {
        padding: 0;
      }
      button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 2.875rem;
        padding: .5rem 1.375rem;
        font-size: 1.125rem;
        font-weight: 700;
        color: #000;
        background: #fff;
        border-radius: .375rem;
        transition: .15s;
        cursor: pointer;
        @include d {
          height: 5.625rem;
          padding: 1.875rem;
          font-size: 1.5rem;
        }
        &:hover {
          color: #fff;
          background: #000;
        }
      }
      button + button {
        margin-left: 1rem;
        @include d {
          margin-left: 1.875rem;
        }
      }
      &.answers-2,
      &.answers-3 {
        button {
          font-size: 1rem;
          @include d {
            font-size: 1.125rem;
          }
        }
        @include m {
          display: flex;
          flex-direction: column;
          button + button {
            margin-left: 0;
            margin-top: .5rem;
          }
        }
      }
    }
  }
  .result {
    position: relative;
    z-index: 2;
  }
  

  @include d {

    .q-enter-from {
      left: -150%;
    }
    .q-enter-active {
      position: absolute;
      top: 0;
      transition: left .5s .1s ease;
    }
    .q-enter-to {
      left: 0;
    }

    .q-leave-from {
      top: 0;
      opacity: 1;
    }
    .q-leave-active {
      position: relative;
      transition: .3s ease;
    }
    .q-leave-to {
      top: -100%;
      opacity: 0;
    }

    .r-enter-active,
    .r-leave-active {
      transition: opacity .5s ease;
    }

    .r-enter-from,
    .r-leave-to {
      opacity: 0;
    }

  }

</style>

