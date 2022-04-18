const KEY = 'Local store range';

const LocalSer = {
    setLocal(value) {
        const localString = JSON.stringify(value);
        localStorage.setItem(KEY, localString);
    },
    getLocal() {
        const localValue = localStorage.getItem(KEY);
        return JSON.parse(localValue);
    },
    deleLocal() {
        if(!!this.getLocal()){
            localStorage.removeItem(KEY)
        } else {
            alert('nothing in local storange');
        }
    }
};

export default LocalSer;