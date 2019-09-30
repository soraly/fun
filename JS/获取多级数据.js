var arr =[
    {id:111,name:'xiang',children:[
                                    {id:222,name:'xiang22'},
                                    {id:333,name:'xiang33',children:[{id:444,name:'xiang444'}]},
                                ]}]

//只获取name：                                
arr.map(item=>{return {name:item.name,children:[item.children.map(child=>{return {name:child.name,children: child.children}})]}});