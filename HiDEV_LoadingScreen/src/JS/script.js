var count = 0;
var thisCount = 0;

const emoji = {
    INIT_BEFORE_MAP_LOADED: [ '⏳' ],
    INIT_AFTER_MAP_LOADED: [ '🌍', '✔️' ],
    INIT_SESSION: [ '🚀', '🌘', '✔️' ],
};

const handlers = {
    startInitFunctionOrder(data)
    {
        count = data.count;

        document.querySelector('.letni h3').innerHTML += emoji[data.type][data.order - 1] || '';
    },

    initFunctionInvoking(data)
    {
        document.querySelector('.thingy').style.left = '0%';
        document.querySelector('.thingy').style.width = ((data.idx / count) * 100) + '%';
    },

    startDataFileEntries(data)
    {
        count = data.count;

        document.querySelector('.letni h3').innerHTML += "\u{1f358}";
    },

    performMapLoadFunction(data)
    {
        ++thisCount;

        document.querySelector('.thingy').style.left = '0%';
        document.querySelector('.thingy').style.width = ((thisCount / count) * 100) + '%';
    },

    onLogLine(data)
    {
        document.querySelector('.letni p').innerHTML = data.message + "..!";
    }
};

window.addEventListener('message', function(e)
{
    (handlers[e.data.eventName] || function() {})(e.data);
});