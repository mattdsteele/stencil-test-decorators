import { Component, Prop } from '@stencil/core';

function TestDecorator() {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor.value);
  };
}

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true
})
export class MyComponent {
  @Prop() first: string;
  @Prop() last: string;

  @TestDecorator()
  decoratedMethod() {
    console.log('Inside decorated method');
  }

  componentDidLoad() {
    this.decoratedMethod();
  }

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
