/** @format */

import React from "react"
import { Text, View, StyleSheet } from "react-native"
import { map, capitalize } from "lodash"

const Stats = (props) => {
  const { stats } = props

  const getColor = (num) => {
    if (num < 50) {
      return "#c0392b"
    } else if (num >= 50 && num <= 100) {
      return "#21fa03"
    } else {
      return "#fa03ef"
    }
  }
  const barStyles = (num) => {
    const color = getColor(num)
    return {
      backgroundColor: color,
      width: `${num}%`,
      maxWidth: "100%",
    }
  }
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base stats</Text>
      {map(stats, (item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
          </View>
          <View style={styles.blockInfo}>
            <View style={styles.bgBar}>
              <View
                style={[styles.bgInternBar, barStyles(item.base_stat)]}
              ></View>
            </View>
            <Text style={styles.number}>{item.base_stat}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    marginTop: 40,
    marginBottom: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 30,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  blockTitle: {
    width: "32%",
  },
  statName: {
    fontSize: 12,
    color: "#6b6b6b",
  },
  blockInfo: {
    width: "68%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
    marginLeft: 4,
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "88%",
    height: 5,
    borderRadius: 20,
    // overflow: "hidden",
  },
  bgInternBar: {
    height: 5,
    borderRadius: 20,
  },
})
export default Stats
