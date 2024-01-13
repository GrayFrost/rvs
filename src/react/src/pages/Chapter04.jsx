import React from "react";
import { useSendCode } from "../hooks/useSendCode";

class PageComponent extends React.Component {
  static getDerivedStateFromProps() {
    console.log("static getDerivedStateFromProps");
    return true;
  }
  
  componentDidMount() {
    console.log("componentDidMount");
  }
  
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  static getDerivedStateFromError() {
    console.log("static getDerivedStateFromError");
  }

  componentDidCatch() {
    console.log("componentDidCatch");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <section>
        <h1>第四章 —— 生命周期</h1>
      </section>
    );
  }
}

export default function Page() {
  useSendCode("04");
  return <PageComponent />;
}
