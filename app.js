const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: []
    };
  },
  methods: {
    addGoal() {
      if (this.enteredGoalValue.trim() !== '') {
        this.goals.push(this.enteredGoalValue);
        this.enteredGoalValue = ''; // Clear the input after adding a goal
      }
    }
  }
});

app.mount('#user-goals');
