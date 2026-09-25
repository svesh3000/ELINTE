function imageComparison(selector) {
    let comparison = $(selector)
        .addClass('image-comparison')
        .prepend('<div class="image-comparison_before"></div>')
        .append('<button class="image-comparison_slider"></button>');

    let images = comparison
        .find('img')
        .addClass('image-comparison_image')
        .css('max-width', comparison.width());

    let before = comparison
        .find('.image-comparison_before')
        .append(images.eq(0));

    comparison
        .find('.image-comparison_slider')
        .on('dragstart', () => false)
        .on('mousedown', function (e) {
            let slider = $(this);

            let doc = $(document).on('mousemove', (e) => {
                let offset = e.pageX - comparison.offset().left;
                let width = comparison.width();

                if (offset < 0) offset = 0;
                if (offset > width) offset = width;

                slider.css('left', offset + 'px');
                before.css('width', offset + 'px');
            });

            doc.on('mouseup', () => doc.off('mousemove'));
           })
        .on('keydown', function (e) {
            let slider = $(this);
            let offset = parseInt(slider.css('left'));
            let width = comparison.width();

            if (e.keyCode === 37) offset--;
            if (e.keyCode === 39) offset++;
            if (offset < 0) offset = 0;
            if (offset > width) offset = width;

            slider.css('left', offset + 'px');
            before.css('width', offset + 'px');
        });
}

imageComparison('#image-comparison');
imageComparison('#image-comparison-3');
imageComparison('#image-comparison-4');
imageComparison('#image-comparison-5');
imageComparison('#image-comparison-6');
imageComparison('#image-comparison-7');
imageComparison('#image-comparison-8');
imageComparison('#image-comparison-9');
imageComparison('#image-comparison-10');
imageComparison('#image-comparison-11');
imageComparison('#image-comparison-12');
imageComparison('#image-comparison-13');
imageComparison('#image-comparison-14');
imageComparison('#image-comparison-15');
imageComparison('#image-comparison-16');
imageComparison('#image-comparison-17');
imageComparison('#image-comparison-18');
imageComparison('#image-comparison-19');
