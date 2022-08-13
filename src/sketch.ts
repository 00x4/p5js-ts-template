import p5 from 'p5';

export const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    // TODO: implement your sketch
    p.background('#ffffff');
    p.strokeWeight(3);
    p.stroke('#cc33aa');
    p.fill('#ffaadd');
    p.rect(100, 100, 200, 150);
  };
};
