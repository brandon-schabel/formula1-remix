import React, { FC } from 'react'

interface IIcon {
  color: string
}

const colorMap: Record<string, string> = {
  red: '#ff0000',
  black: '#000000',
}

export const CarIcon: FC<IIcon> = ({ color = colorMap.red }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 250 250"
      xmlSpace="preserve"
      style={{
        fill: color,
      }}
    >
      <pattern
        width="69"
        height="69"
        x="1540"
        y="12650"
        overflow="visible"
        patternUnits="userSpaceOnUse"
        viewBox="2.1 -70.9 69 69"
      >
        <path fill={color} d="M71.1 -1.9L2.1 -1.9 2.1 -70.9 71.1 -70.9z"></path>
        <path fill={color} d="M71.1 -1.9L2.1 -1.9 2.1 -70.9 71.1 -70.9z"></path>
        <g fill={color}>
          <path d="M61.8-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M54.1-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M46.4-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M38.8-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M31.1-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M23.4-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M15.8-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M8.1-71.7v.2l-.2.2c-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2c0 .1 0 .1 0 0M.4-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.2.4.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2c0 .1 0 .1 0 0"></path>
        </g>
        <path
          fill={color}
          d="M69.4-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M.5-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.2.3.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2c0 .1 0 .1 0 0"
        ></path>
        <g fill={color}>
          <path d="M69.4-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M54.1-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M31.1-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M8.2-64v.2c-.1.1-.2.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.3.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2.1.3.1.2.1.3-.1 0-.1 0 0 0M.5-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1 0 .3.1.4 0 .2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2"></path>
          <g>
            <path d="M69.4-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M54.1-56.3v.2c-.1 0-.1 0-.2.1s-.1.3-.1.4c-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M31.1-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M8.2-56.3v.2c-.1 0-.2 0-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c-.1 0-.1 0 0 0M.5-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3"></path>
          </g>
          <g>
            <path d="M69.4-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M54.1-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M31.1-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M8.2-48.7v.2c-.1.1-.2.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.1.2.3.6.5.6s.4-.1.5-.1c.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2.1.3.1.2.1.3-.1 0-.1 0 0 0M.5-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.2.3.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3"></path>
          </g>
          <g>
            <path d="M69.4-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M54.1-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M31.1-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M8.2-41v.2c-.1 0-.2 0-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c-.1 0-.1 0 0 0M.5-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5h.4c.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2"></path>
          </g>
          <g>
            <path d="M69.4-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M54.1-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M31.1-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M8.2-33.4v.2c-.1.1-.2.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c-.1 0-.1 0 0 0M.5-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3"></path>
          </g>
          <g>
            <path d="M69.4-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M54.1-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M31.1-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M8.2-25.7v.2c-.1.1-.2 0-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .1.2.3.3.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2.1.2.1.2.1.3-.1 0-.1 0 0 0M.5-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.3.5.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3"></path>
          </g>
          <g>
            <path d="M69.4-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M61.8-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M54.1-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M46.5-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M38.8-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M31.1-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M23.5-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M15.8-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M8.2-18.1v.2c-.1.1-.2.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.3.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2.1.3.1.2.1.3-.1.1-.1 0 0 0M.5-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1 0 .3.1.4.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.1c0 .1 0 0 0 0"></path>
          </g>
          <g>
            <path d="M69.4-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.4.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2M54.1-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.4.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2M31.1-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.4.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2M8.2-10.4v.2c-.1.1-.2 0-.2.1-.1.1-.1.3-.1.3-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.3.6.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2.1.2.1.2.1.3-.1 0-.1 0 0 0M.5-10.4v.2c-.1.1-.1.1-.2.1 0 .1-.1.3-.1.3-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.2.3.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.4.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2"></path>
          </g>
        </g>
        <g fill={color}>
          <path d="M69.4-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.2.4.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2c0 .1 0 0 0 0M61.8-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M54.1-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.2.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2.1.3-.1.4-.3v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.1c0 .1 0 0 0 0M46.5-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.1.2.3.6.5.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2.1.2.1.1.1.2M38.8-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M31.1-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.2.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M23.5-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.1.2.3.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2c0 .1 0 0 0 0M15.8-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.2.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M8.2-2.8v.2c-.1.1-.2.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.3.5.2.2.4.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8 0 .1-.2.2-.3.2-.2.1-.1.2-.3.3-.1 0-.2.1-.2.2v.1c-.1.1-.1 0 0 0M.5-2.8v.2c-.1.1-.1.1-.2.1 0 .1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.4.5.2.2.3.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2 0 .3-.2.4-.4v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.1 0-.2.1-.4.1-.1.1-.1.2-.3.3-.1 0-.2.1-.2.2v.1c0 .1 0 0 0 0"></path>
        </g>
      </pattern>
      <path d="M160.9 113.3l-13-22.2c-3.3-5.7-9.5-9.2-16.1-9.2H93c-8.2 0-15.4 5.3-17.8 13.1l-5.8 18.7c-4 1.1-6.9 4.8-6.9 9.1v22.1c0 5.2 4.2 9.5 9.5 9.5h2.6c.3 0 .5-.2.5-.5.3-9.1 7.8-16.5 17-16.5s16.7 7.3 17 16.5c0 .3.2.5.5.5h33.2c.3 0 .5-.2.5-.5.3-9.1 7.8-16.5 17-16.5s16.7 7.3 17 16.5c0 .3.2.5.5.5 5.2 0 9.5-4.2 9.5-9.5v-3.2c.2-15.1-11.5-27.4-26.4-28.4zm-20.6-17.8l10.4 17.7h-35V90.6h16.1c3.5 0 6.8 1.9 8.5 4.9zm-56.7 2.1c1.3-4.1 5.1-6.9 9.4-6.9h13.9v22.6H78.7l4.9-15.7z"></path>
      <ellipse cx="92" cy="154.3" rx="13.9" ry="13.8"></ellipse>
      <ellipse cx="160.5" cy="154.3" rx="13.9" ry="13.8"></ellipse>
    </svg>
  )
}
