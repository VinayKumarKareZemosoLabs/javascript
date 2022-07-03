let myTodos = {
    day : 'Monday',
    meetings :  0,
    meetDone : 0,

    addMeeting: function(num){
        this.meetings=this.meetings+num;
    },

    summary: function(){
        return `You have ${this.meetings + this.meetDone} meetings today!`;

    },

    meetingDone: function(num){
        this.meetDone = this.meetDone-num;

    },

    reset: function(){
        this.meetDone=0;
        this.meetings=0;
    }

}


myTodos.addMeeting(10)
myTodos.meetingDone(5)
// myTodos.reset();
console.log(myTodos.summary());



