var mongoose=require('../config/al_regionsch');

const admin_user=mongoose.Schema({ 
    username:{
        type:String,
        require:true,
        minlegth:3,
        maxlength:25,
    },
     email:{
        type:String,
          lowercase:true,
          unique:true,
          require:true,

        match:[/.+\@.+\..+/,'Please fill a valid email address']
     }
});
module.exports = mongoose.model('adminuser',admin_user);