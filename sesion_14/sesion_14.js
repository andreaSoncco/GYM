/* 1. 
*/

function goto(level,button) {
    if (level >= 0 && level <= 3 && typeof( level=== 'number' && Number.isInteger())) { 
        switch (button) {
            case '0':
            case '1': 
            case '2':
            case '3':  
            return parseInt(button) - level;
            default:
            break;
        }
    }
}