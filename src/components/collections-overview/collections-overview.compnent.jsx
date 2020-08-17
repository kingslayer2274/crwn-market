import React from "react";

import "./collections-overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCollectionsPreview } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ shopData }) => (
  <div className="collections-overview">
    {shopData.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  shopData: selectCollectionsPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
