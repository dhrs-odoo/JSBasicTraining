const { Component, mount, xml, onMounted ,useState,props} = owl;

class Scoreboard extends Component {
  static template = xml`
    <header>
    <h1>Rock Paper Scissors</h1>
    </header>
        <div class="score-board">
            <div id="user" class="badge">User</div>
            <div id="computer" class="badge">Comp</div>
            <span id="user_score"><t t-esc = "props.state.user_count"/></span> : <span id="computer_score"><t t-esc = "props.state.com_count"/></span>
        </div>
    `;
    static props = ["state"]
}

class Result extends Component {
  static template = xml`
    <div class="result">
        <h3 id="user_result"><t t-esc = "props.state.user_result"/></h3>
        <h3 id="result"><t t-esc = "props.state.result"/></h3>
        <h3 id="com_result"><t t-esc = "props.state.com_result"/></h3>

    </div>
    `;
    static props = ["state"]
}

class Buttons extends Component {
  static template = xml`
   <Scoreboard state="state"/>
    <Result state="state"/>
    <div class="buttons">
    <div>
        <button class="button btn" id="rock" t-on-click="rockBtn">Rock</button>   
    </div>
    <div >
        <button  class="button btn" id="paper" t-on-click="paperBtn">Paper</button>
    </div>
    <div>
        <button   class="button btn" id="scissors" t-on-click="scissorBtn">Scissors</button>
    </div>
   
</div>

    `;

    setup(){
        this.state = useState({
          result:"",
          user_result:"",
          com_result:"",
          com_count:0,
          user_count:0,  
        })
    }
    rockBtn(){
        let Computer_choice = (Math.floor(Math.random()*3+1))
        if(Computer_choice==2){
            this.state.user_result="Rock"
            this.state.result="You Lose"
            this.state.com_result="PAPER"
            this.state.com_count++ 
        }
        else if(Computer_choice==3){
            this.state.user_result="Rock"
            this.state.result="You Win"
            this.state.com_result="SCISSORS"
            this.state.user_count++ 
        }
        else{
            this.state.user_result="ROCK"
            this.state.result="It's a Tie"
            this.state.com_result="ROCK"
        }
    }
    paperBtn(){
        let Computer_choice = (Math.floor(Math.random()*3+1))
        if(Computer_choice==1){
            this.state.user_result="PAPER"
            this.state.result="You Won"
            this.state.com_result="ROCK"
            this.state.user_count++ 
        }
        else if(Computer_choice==2){
            this.state.user_result="PAPER"
            this.state.result="It's a Tie"
            this.state.com_result="PAPER"
        }
        else if(Computer_choice==3)    {
            this.state.user_result="PAPER"
            this.state.result="You Lose"
            this.state.com_result="SCISSORS"
            this.state.com_count++ 
        }
    }
    scissorBtn(){
        let Computer_choice = (Math.floor(Math.random()*3+1))
        if(Computer_choice==1){
            this.state.user_result="SCISSORS"
            this.state.result="You Lose"
            this.state.com_result="ROCK"
            this.state.com_count++ 
        }
        else if(Computer_choice==2){
            this.state.user_result="SCISSORS"
            this.state.result="You Won"
            this.state.com_result="PAPER"
            this.state.user_count++ 
        }
        else{
            this.state.user_result="SCISSORS"
            this.state.result="It's a Tie"
            this.state.com_result="SCISSORS"
        }
    }
  static components = { Result ,Scoreboard };
}

mount(Buttons, document.body);
