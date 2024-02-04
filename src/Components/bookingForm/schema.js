const bookingSchema = [{
    id:1,
    name:"first_name",
    label:"First Name",
    type:"text",
    element:"input",
    placeholder:"Lakshman",
    value:"",
    required:true,
    classname:"border p-2 w-full rounded focus:outline-none focus:border-green-500" 

},{
    id:2,
    name:"last_name",
    label:"Last Name",
    type:"text",
    element:"input",
    placeholder:"Dasyam",
    value:"",
    required:true,
    classname:"border p-2 w-full rounded focus:outline-none focus:border-green-500" 

},{
    id:3,
    name:"email_address",
    label:"Email Address",
    type:"email",
    element:"input",
    placeholder:"lakshmandasyam@example.com",
    value:"",
    required:true,
    classname:"border p-2 w-full rounded focus:outline-none focus:border-green-500" 

},{
    id:4,
    name:"date_of_birth",
    label:"Date of Birth",
    type:"date",
    element:"input",
    placeholder:"",
    value:"",
    required:true,
    classname:"border p-2 w-full rounded focus:outline-none focus:border-green-500" 

},{
    id:5,
    name:"place_of_birth",
    label:"Place of Birth",
    type:"text",
    element:"input",
    placeholder:"Write your place of birth here",
    value:"",
    required:true,
    classname:"border p-2 w-full rounded focus:outline-none focus:border-green-500" 

},{
    id:5,
    name:"time_of_birth",
    label:"TIme of Birth",
    type:"time",
    element:"input",
    placeholder:"",
    value:"",
    required:true,
    classname:"border p-2 w-full rounded focus:outline-none focus:border-green-500"

},{
    id:6,
    name:"type_of_prediction",
    label:"Type of Prediction",
    type:"",
    element:"select",
    placeholder:"",
    value:"",
    required:true,
    classname:"border p-2 w-full rounded focus:outline-none focus:border-green-500"

},{
    id:7,
    name:"type_of_prediction",
    label:"Type of Prediction",
    type:"",
    element:"select",
    placeholder:"",
    value:"",
    options:[{
        id:"1",
        parent_name : "type_of_prediction",
        value:"Parashara Method",
        label:"Parashara Method"
    },{
        id:"2",
        parent_name : "type_of_prediction",
        value:"Jaimini Method",
        label:"Jaimini Method"
    },{
        id:"3",
        parent_name : "type_of_prediction",
        value:"KP Method",
        label:"KP Method"
    },{
        id:"4",
        parent_name : "type_of_prediction",
        value:"Western Astrology",
        label:"Western Astrology"
    }],
    required:true,
    classname:"border p-2 w-full rounded focus:outline-none focus:border-green-500"

},{
    id:8,
    name:"phone_number",
    label:"Phone Number",
    type:"tel",
    element:"input",
    placeholder:"999-999-999",
    value:"",
    required:true,
    classname:"border p-2 w-full rounded focus:outline-none focus:border-green-500"

}] 

export default bookingSchema