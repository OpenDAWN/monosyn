import React from 'react';
import DefaultLayout from './layouts/default';

export default React.createClass({
  render() {
    'use strict';
    return (
        <DefaultLayout title={this.props.title}>
            <main role="main" id="synth">
                <h1>{this.props.title}</h1>
                <p className="synth-id-label">ID: <span id="synth-id">{this.props.id}</span></p>
                <div id="monosyn"></div>
                <p>Filter mod URL: <a href={'/r/#' + this.props.id} target="_blank">#{this.props.id}</a></p>
            </main>
            <script src="/js/dist/synth-bundle.js"></script>
        </DefaultLayout>
    );
  }
});