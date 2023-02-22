class mobile 
{
    model=''
    name=''
    price=''
    ram=''
    showmobile()
    {
        console.log(this.model, '', this.name, '', this.price, '', this.ram)
    }
}
let m1=new mobile()
m1.model='E2021'
m1.name='apple'
m1.price='20000'
m1.ram='8GB'
m1.showmobile()

let m2=new mobile()
m2.model='E2021'
m2.name='redmi'
m2.price='30000'
m2.ram='12GB'
m2.showmobile()