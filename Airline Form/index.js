const form = document.travelform
const button = document.travelform


button.addEventListener('submit', save)
{
    var firstName = form.elements['First'].value
    var lastName = form.elements['Last'].value
    var age = form.elements['Age'].value
    var gender = form.elements['gender'].value
    var location = form.elements['Destination'].value
    var dietry =[]
    if(form.element['vegetarian'].checked){
        dietry.push(document.getElementById('vegetarian').value)
    }
    if(form.element['kosher'].checked){
        dietry.push(document.getElementById('kosher').value)
    }
    if(form.element['lactose free'].checked){
        dietry.push(document.getElementById('kosher').value)
    }
    alert('First Name:' + firstName + 'Last Name:' + lastName + 'Age:' + age + 'Gender:' + gender + 'location:' + location + "Dietry Restrictions:" + dietry);
}


    
