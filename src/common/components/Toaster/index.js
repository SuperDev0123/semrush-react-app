import React from 'react'
import toast from 'react-hot-toast'
import {
  IoMdCheckmarkCircleOutline,
  IoMdClose,
  IoMdInformationCircle,
} from 'react-icons/io'
import { CgInfo } from 'react-icons/cg'

import styles from './Toaster.style'

const success = (message, customOpt) => {
  return toast(
    (t) => (
      <div style={styles.root}>
        <div style={styles.iconContainer}>
          <IoMdCheckmarkCircleOutline style={styles.icons} />
        </div>
        <div style={styles.message}>{message}</div>
        <div style={styles.iconContainer}>
          <IoMdClose style={styles.icons} onClick={() => toast.dismiss(t.id)} />
        </div>
      </div>
    ),
    {
      position: 'top-right',
      style: {
        ...styles.success,
      },
      ...customOpt,
    }
  )
}

const error = (message, customOpt) => {
  return toast(
    (t) => (
      <div style={styles.root}>
        <div style={styles.iconContainer}>
          <IoMdInformationCircle style={styles.icons} />
        </div>
        <div style={styles.message}>{message}</div>
        <div style={styles.iconContainer}>
          <IoMdClose style={styles.icons} onClick={() => toast.dismiss(t.id)} />
        </div>
      </div>
    ),
    {
      position: 'top-right',
      style: {
        ...styles.error,
      },
      ...customOpt,
    }
  )
}

const info = (message, customOpt) => {
  return toast(
    (t) => (
      <div style={styles.root}>
        <div style={styles.iconContainer}>
          <CgInfo style={styles.icons} />
        </div>
        <div style={styles.message}>{message}</div>
        <div style={styles.iconContainer}>
          <IoMdClose style={styles.icons} onClick={() => toast.dismiss(t.id)} />
        </div>
      </div>
    ),
    {
      position: 'top-right',
      style: {
        ...styles.info,
      },
      ...customOpt,
    }
  )
}

const Toaster = { success, error, info }

export default Toaster
