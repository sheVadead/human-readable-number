module.exports = function toReadable(n) {
    const words ={
        0: 'zero',
        1: 'one',
        2: 'two',        
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',        
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }
    let strNum = n.toString().split('')
    if (strNum.length === 1) {
        return (words[strNum[0]])
    } else if ( n>19 && n<100 && n % 10!=0) {
        return (words[strNum[0]+0] + ' ' + words[strNum[1]])
    }else if ( n>19 && n<100 ) {
        return (words[strNum[0]+0])
    } else if (n<20) {
        return (words[n])
    }else if (n>99 && ((n % 100) <= 20) && (n % 100)!=0) {
        return (words[strNum[0]]+ ' ' + 'hundred' + ' ' + words[n % 100] )
    }else if (n>99 && ((n % 100) <= 20) && (n % 100)==0) {
        return (words[strNum[0]]+ ' ' + 'hundred' )
    }
      else if (n>99 && ((n % 100) > 20) && strNum[2]==0) {
        return (words[strNum[0]]+ ' ' + 'hundred' + ' ' + words[strNum[1] + 0] )
    }
    else if (n>99 && ((n % 100) > 20) && strNum[2]!=0) {
        return (words[strNum[0]]+ ' ' + 'hundred' + ' '+ words[strNum[1] + 0]+ ' ' + words[strNum[2]])
    }

}