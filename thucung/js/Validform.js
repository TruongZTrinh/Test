

function Validator (options){
    var allRules = {};// lưu tất cả rule , tránh trường hợp chỉ áp dụng rule sau cùng
    function validate (inputElement,rule){
                // co duoc value cua o input vừa blur: inputElement.value
                // ta có được hàm xử lí luôn :rule.test
                var errorElement = inputElement.parentElement.querySelector('.form_mesage');
                var errorMessage;   
                var rules = allRules[rule.selector];
               for(var i = 0;i<rules.length;i++){
                    errorMessage = rules[i](inputElement.value);
                    if(errorMessage) break;
               }

                if(errorMessage){
                    errorElement.innerText = errorMessage;
                    inputElement.classList.add('invalid');
                    inputElement.classList.remove('valid');
                }else {
                    errorElement.innerText = "";
                    inputElement.classList.add('valid');
                    inputElement.classList.remove('invalid');
                }                                  
    }

   var formElement = document.querySelector(options.formID);
    if(formElement){
        formElement.onsubmit = function (evt    ){
            evt.preventDefault();
        }

        options.rules.forEach(function (rule){
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.form_mesage');
            // Lấy tất cả các rule
            if(Array.isArray(allRules[rule.selector])){
                allRules[rule.selector].push(rule.test);
            }else {
                allRules[rule.selector] = [rule.test]
            }
           
            // Xử lí khi ng dùng blur
            inputElement.onblur = function (){
                validate(inputElement,rule);
            }

            // Xử lí khi ng dùng bắt đầu nhập lại

            inputElement.oninput = function (){
                errorElement.innerText = "";
                inputElement.classList.remove('invalid');
            }
            
        })
    }

}


// Nếu không lỗi thì trả về undefined
// nếu có lỗi trả về message lỗi
  
Validator.isRequire = function(selector,errmsg)  {
    return {
        selector: selector,
        test : function (value){
            return value.trim() ? undefined : errmsg || 'Vui lòng nhập trường này'
        }
    }
}


Validator.isEmail = function(selector,errmsg)  {
     return {
        selector: selector,
        test : function (value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
            return regex.test(value) ? undefined : errmsg || 'Trường này phải là Email'
        }
    }
}


Validator.minLength = function(selector , min,errmsg){
    return {
        selector: selector,
        test : function (value){
            return value.length >= min ? undefined : errmsg || `Vui lòng nhập tối thiểu ${min} kí tự`
        }
    }

}

Validator.Confirm = function(selector , getConfirmValue, errmsg){
    return {
        selector: selector,
        test : function (value){
            return value === getConfirmValue() ? undefined : errmsg || 'Giá trị nhập lại không chính xác'
        }
    }

}

