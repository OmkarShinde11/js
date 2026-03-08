    class Ratelimiter{
        Counter=1;
        time=new Date();
        constructor(timeLimit,request){
            this.timeLimit=timeLimit; // pass in minutes
            this.maxRequest=request;
        }
        getLimit(){
            return this.Counter;
        }
        random(){
            let initialTime=new Date(this.time).getTime() + this.timeLimit * 60 * 1000;
            let currentTime=new Date().getTime();
            if(currentTime < initialTime && this.Counter <=this.maxRequest){
                this.Counter++;
                return `Hii You are able to call an api.`
            }
            if(currentTime < initialTime && this.Counter >=100){
                return `Too many request try again after some time`
            }
            if(currentTime > initialTime){
                this.Counter=1;
                this.time=new Date();
                return `Timer is just reset`;
            }

            // alternative way
            // if (currentTime < initialTime) {
            //     this.counter = 0;
            //     this.windowStart = currentTime;
            //   }
            // if (this.counter < this.maxRequests) {
            //     this.counter++;
            //     return "Hii You are able to call an API.";
            // } 
            // else {
            //     return "Too many requests, try again after some time.";
            // }
        }
    };

const first=new Ratelimiter(1,100);
console.log(first.getLimit());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.random());
console.log(first.getLimit());