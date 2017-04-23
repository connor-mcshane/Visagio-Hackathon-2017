$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            colds: 2666,
            flus: null,
            intoxication: 2647
        }, {
            period: '2010 Q2',
            colds: 2778,
            flus: 2294,
            intoxication: 2441
        }, {
            period: '2010 Q3',
            colds: 4912,
            flus: 1969,
            intoxication: 2501
        }, {
            period: '2010 Q4',
            colds: 3767,
            flus: 3597,
            intoxication: 5689
        }, {
            period: '2011 Q1',
            colds: 6810,
            flus: 1914,
            intoxication: 2293
        }, {
            period: '2011 Q2',
            colds: 5670,
            flus: 4293,
            intoxication: 1881
        }, {
            period: '2011 Q3',
            colds: 4820,
            flus: 3795,
            intoxication: 1588
        }, {
            period: '2011 Q4',
            colds: 15073,
            flus: 5967,
            intoxication: 5175
        }, {
            period: '2012 Q1',
            colds: 10687,
            flus: 4460,
            intoxication: 2028
        }, {
            period: '2012 Q2',
            colds: 8432,
            flus: 5713,
            intoxication: 1791
        }],
        xkey: 'period',
        ykeys: ['colds', 'flus', 'intoxication'],
        labels: ['colds', 'flus', 'intoxication'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
