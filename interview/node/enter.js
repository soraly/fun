
process.stdout.write("请输入用户名:");

let users = {
    "admin":"123",
	"user1":"321",
	"user2":"213"
}

let username="";

process.stdin.on('data',input=>{
    input = input.toString().trim();
    if(!username){
        if(Object.keys(users).includes(input)){
            username = input;
            process.stdout.write('请输入密码：')
        }else {
            process.stdout.write('用户名不正确，重新输入：')
        }
        
    }else {
        if(users[username] === input){
            console.log('登录成功！');
            process.exit()
        }else {
            process.stdout.write('密码不对，请再输入密码：');
        }
    }
})