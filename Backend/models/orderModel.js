const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema(
  {
   user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
   },
   shippingInfo:{
    country:{
      type:String,
      required:true,
    },
    firstname:{
      type:String,
      required:true,
    },
    lastname:{
      type:String,
      required:true,
    },
    address:{
      type:String,
      required:true,
    },
    other:{
      type:String,
      required:true,
    },
    city:{
      type:String,
      required:true,
    },
    state:{
      type:String,
      required:true,
    },
    pincode:{
      type:Number,
      required:true,
    }
   },
  //  paymentInfor:{
  //   razorpayOrderId:{
  //     type:String,
  //     required:true,
  //   },
  //   razorpayPaymentId:{
  //     type:String,
  //     required:true,
  //   },
  //  },
   orderItems:[
    {
      product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Products",
        required:true,
      },
      color:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Colors",
        required:true,
      },
      quantity:{
        type:Number,
        required:true,
      },
      price:{
        type:Number,
        required:true,
      }
    }
   ],
   paidAt:{
    type:Date,
    default:Date.now()
   },
   totalPrice:{
    type:Number,
    required:true,
  },
   month:{
    type:String,
    default:new Date().getMonth(),
  },
  totalPriceAfterDiscount:{
   type:Number,
   required:true,
 },
 orderStatus:{
  type:String,
  default:"ordered",
 }
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Order", orderSchema);
