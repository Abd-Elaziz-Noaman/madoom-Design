(function ($) {

    "use strict";

    var fullHeight = function () {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

})(jQuery);


(function ($) {
    "use strict";


    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);


// Search index.html

let indexList = [
    {
        name: "mohamed eslam",
        id: "6553443",
        numOfDays: 8,
        lastPaymentDate: "sat 12/2/2022"
    },
    {
        name: "ahmed eslam",
        id: "6553443",
        numOfDays: 8,
        lastPaymentDate: "sat 12/2/2022"
    },
    {
        name: "Ebrahim eslam",
        id: "6553443",
        numOfDays: 8,
        lastPaymentDate: "sat 12/2/2022"
    }, {
        name: "Ali eslam",
        id: "6553443",
        numOfDays: 8,
        lastPaymentDate: "sat 12/2/2022"
    }, {
        name: "Medo eslam",
        id: "6553443",
        numOfDays: 8,
        lastPaymentDate: "sat 12/2/2022"
    },
]

const IndexSearchInput = document.getElementById("choices-text-preset-values")
const indexBody = document.getElementById("index-table-body")

if (indexBody) {
    let indexArr = []
    indexList.forEach((item) => {
        indexArr.push(`
   <tr>
       <td>${item.name}</td>
       <td>${item.id}</td>
       <td>${item.numOfDays}</td>
       <td>${item.lastPaymentDate}</td>
   </tr>
   `)
    })

    indexBody.innerHTML = indexArr.join("")

    IndexSearchInput.addEventListener("keyup", (e) => {
        let searchValue = e.target.value;

        let newArray = indexList.filter((item) => item.name.startsWith(searchValue))

        if (searchValue === '') {
            indexBody.innerHTML = indexArr.join("")
        } else {
            newArray.forEach((item) => {
                indexBody.innerHTML = `
            <tr>
                <td>${item.name}</td>
                <td>${item.id}</td>
                <td>${item.numOfDays}</td>
                <td>${item.lastPaymentDate}</td>
            </tr>
            `
            })
        }


    })
}


// Search final-amount.html

let amountList = [
    {
        name: "mohamed eslam",
        id: "6553443",
        numOfDays: 8,
        finalAmount: "20100",
        details: "_dandkn"
    },
    {
        name: "ahmed eslam",
        id: "6553443",
        numOfDays: 8,
        finalAmount: "20100",
        details: "_dandkn"
    },
    {
        name: "Ebrahim eslam",
        id: "6553443",
        numOfDays: 8,
        finalAmount: "20100",
        details: "_dandkn"
    }, {
        name: "Ali eslam",
        id: "6553443",
        numOfDays: 8,
        finalAmount: "20100",
        details: "_dandkn"
    }, {
        name: "Medo eslam",
        id: "6553443",
        numOfDays: 8,
        finalAmount: "20100",
        details: "_dandkn"
    },
]

const amountSearchInput = document.getElementById("choices-text-preset-values")
const amountBody = document.getElementById("amount-table-body")

if (amountBody) {
    let amountArr = []
    amountList.forEach((item) => {
        amountArr.push(`
   <tr>
       <td>${item.name}</td>
       <td>${item.id}</td>
       <td>${item.numOfDays}</td>
       <td>${item.finalAmount}</td>
       <td>${item.details}</td>   
    </tr>
   `)
    })

    amountBody.innerHTML = amountArr.join("")

    amountSearchInput.addEventListener("keyup", (e) => {
        let searchValue = e.target.value;
        console.log("🚀 ~ file: main.js ~ line 184 ~ amountSearchInput.addEventListener ~ searchValue", searchValue)

        let newArray = amountList.filter((item) => item.name.startsWith(searchValue))

        if (searchValue === '') {
            amountBody.innerHTML = amountArr.join("")
        } else {
            newArray.forEach((item) => {
                amountBody.innerHTML = `
            <tr>
                <td>${item.name}</td>
                <td>${item.id}</td>
                <td>${item.numOfDays}</td>
                <td>${item.finalAmount}</td>
                <td>${item.details}</td>
            </tr>
            `
            })
        }


    })
}


// Search target.html

let targetList = [
    {
        name: "mohamed eslam",
        id: "6553443",
        numOfDays: 8,
        numOfOrder: "20100",
        state: "Achive"
    },
    {
        name: "ahmed eslam",
        id: "6553443",
        numOfDays: 8,
        numOfOrder: "20100",
        state: "Non-Achive"
    },
    {
        name: "Ebrahim eslam",
        id: "6553443",
        numOfDays: 8,
        numOfOrder: "20100",
        state: "Achive"
    }, {
        name: "Ali eslam",
        id: "6553443",
        numOfDays: 8,
        numOfOrder: "20100",
        state: "Achive"
    }, {
        name: "Medo eslam",
        id: "6553443",
        numOfDays: 8,
        numOfOrder: "20100",
        state: "Achive"
    },
]

const targetSearchInput = document.getElementById("choices-text-preset-values")
const targetBody = document.getElementById("target-table-body")

if (targetBody) {
    let targetArr = []
    targetList.forEach((item) => {
        targetArr.push(`
   <tr>
       <td>${item.name}</td>
       <td>${item.id}</td>
       <td>${item.numOfDays}</td>
       <td>${item.numOfOrder}</td>
       <td>${item.state}</td>   
    </tr>
   `)
    })

    targetBody.innerHTML = targetArr.join("")

    targetSearchInput.addEventListener("keyup", (e) => {
        let searchValue = e.target.value;
        console.log("🚀 ~ file: main.js ~ line 184 ~ amountSearchInput.addEventListener ~ searchValue", searchValue)

        let newArray = targetList.filter((item) => item.name.startsWith(searchValue))

        if (searchValue === '') {
            targetBody.innerHTML = targetArr.join("")
        } else {
            newArray.forEach((item) => {
                targetBody.innerHTML = `
            <tr>
                <td>${item.name}</td>
                <td>${item.id}</td>
                <td>${item.numOfDays}</td>
                <td>${item.numOfOrder}</td>
                <td>${item.state}</td>
            </tr>
            `
            })
        }


    })
}

console.log("hello")