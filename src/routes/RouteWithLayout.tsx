import React from 'react';

interface RouteWithLayoutProps {
  layout?: React.ComponentType;
  component: React.ComponentType;
}

const RouteWithLayout: React.FC<RouteWithLayoutProps> = ({
  layout: Layout,
  component: Component,
}) => {
  if (Layout) {
    return (
      <Layout>
        <Component />
      </Layout>
    );
  }
  return <Component />;
};

export default RouteWithLayout;
