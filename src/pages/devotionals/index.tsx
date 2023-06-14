/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';

import SplitScreens from '@/components/common/SplitScreens';
import AddDevotion from '@/components/devotions/add-devotion';
import DevotionList from '@/components/devotions/devotion-list';
import ViewDevotion from '@/components/devotions/view-devotion';
import Layout from '@/layouts/dashboard/Layout';

const Devotions = () => {
  const [showAddSplitScreens, setShowAddSplitScreens] = useState(false);
  const [showEditSplitScreen, setShowEditSplitScreens] = useState(false);
  const [showViewSplitScreens, setShowViewSplitScreens] = useState(false);

  return (
    <Layout>
      {showAddSplitScreens ? (
        <SplitScreens
          firstScreen={
            <DevotionList
              showAddSplitScreens={showAddSplitScreens}
              setShowAddSplitScreens={setShowAddSplitScreens}
              setShowViewSplitScreens={setShowViewSplitScreens}
            />
          }
          secondScreen={
            <AddDevotion setShowAddSplitScreens={setShowAddSplitScreens} />
          }
        />
      ) : showEditSplitScreen ? (
        <SplitScreens
          firstScreen={
            <DevotionList
              showAddSplitScreens={showEditSplitScreen}
              setShowAddSplitScreens={setShowAddSplitScreens}
              setShowViewSplitScreens={setShowViewSplitScreens}
            />
          }
          secondScreen={
            <AddDevotion
              setShowAddSplitScreens={setShowEditSplitScreens}
              defaultValues={{
                title: 'Purity of the soul',
                devotion: `<p style="fontSize: 14px; fontWeight: 400">Lorem ipsum dolor sit amet consectetur. Enim ullamcorper nulla neque
            dictum massa imperdiet non leo. Arcu urna imperdiet at faucibus
            adipiscing eget ullamcorper. Ipsum sed blandit vestibulum non senectus
            nunc. Pretium volutpat semper pellentesque feugiat odio lobortis eget
            risus iaculis. Quam mauris sagittis nibh elementum. Tristique massa sem
            nisl eu magnis. Non sagittis nibh lectus enim ullamcorper varius mi
            aliquam. Quam elementum accumsan sed condimentum lorem. Sodales egestas
            orci varius proin pellentesque scelerisque vulputate. Purus egestas
            ornare vestibulum pellentesque ut tincidunt turpis sociis. Pulvinar
            ipsum at sed sed adipiscing nec viverra eget. Arcu mauris magna
            tincidunt magnis sed odio dui interdum. Ut turpis mi gravida orci lacus
            eu pellentesque est. Magna phasellus ornare morbi quis. Eu aliquet sed
            nisl a volutpat est libero turpis. Sed nec nunc vel euismod at ut nulla.
            Aenean nunc euismod et purus velit sem nunc. Morbi ac semper eget id
            lobortis ut amet. Lorem consectetur facilisis duis posuere ornare lacus
            vulputate in. Nunc ut pharetra ligula faucibus at tortor. Eget lacus in
            id vulputate interdum. Non elit vitae mauris felis semper id ipsum
            vestibulum morbi. Velit potenti vitae dui tempus diam cras. Aliquam sed
            sed eleifend interdum sed proin nunc congue nibh. Diam cras ultrices
            ligula congue molestie massa. Cursus morbi a diam quam egestas. Eu risus
            sapien mattis urna. Viverra lorem quis neque tincidunt elit vestibulum
            sit tortor. Bibendum in eros donec et vel tellus egestas tellus. Ut
            semper enim vestibulum rhoncus sed sem felis tincidunt sit. Odio mi
            elementum elit massa auctor eu lectus. Nibh magna pellentesque diam
            eget. Praesent mollis praesent vestibulum posuere pharetra id nibh.
            Aenean id aliquam tempus eu donec aliquam ac. Quisque nunc imperdiet
            tristique id tellus. Iaculis metus massa in aliquet pulvinar mattis
            lectus vel purus. Elementum orci malesuada sagittis purus nisi elementum
            donec non consectetur. Varius et mauris consectetur tellus accumsan
            posuere. Viverra viverra accumsan imperdiet nunc amet vivamus diam. Nec
            pretium amet urna magna. Id libero justo amet eu proin. Lectus amet
            ultrices dictumst etiam praesent faucibus morbi. Adipiscing pellentesque
            volutpat tincidunt risus ornare. Mauris lobortis a massa sit lacus in
            at. Lorem vitae gravida sodales eget nunc quisque viverra fames porta.
            Pellentesque ac nam mauris massa. Arcu blandit ante eget vitae commodo
            donec in nunc mi. Lectus tortor nunc consequat cursus nisi in quis. In
            libero hendrerit in vel amet eget. Egestas in integer pellentesque massa
            maecenas massa tellus. Ac eu urna arcu tincidunt morbi proin scelerisque
            proin pretium. In elementum diam mauris risus non. Sollicitudin faucibus
            lobortis odio risus amet vitae a vestibulum amet. Amet arcu neque
            pretium et sed bibendum volutpat nisl orci. Magnis ac aenean sit morbi.
            Donec in consequat varius lectus. Dignissim consectetur id elit orci
            placerat dui non nisi. Quis diam nec eget eget augue. Diam viverra
            placerat montes a imperdiet. In lorem et mus ut neque cursus ultricies
            diam ultrices. Morbi lorem faucibus purus egestas adipiscing in leo.
            Urna magnis risus egestas vel pellentesque sagittis massa. Nascetur enim
            iaculis proin curabitur ornare. Ipsum ornare gravida massa magna augue.
            Aliquam mattis quam ipsum dictumst.</p>`,
              }}
            />
          }
        />
      ) : showViewSplitScreens ? (
        <SplitScreens
          secondIsLarger
          firstScreen={
            <DevotionList
              showAddSplitScreens
              setShowAddSplitScreens={setShowAddSplitScreens}
              setShowViewSplitScreens={setShowViewSplitScreens}
            />
          }
          secondScreen={
            <ViewDevotion
              setShowViewSplitScreens={setShowViewSplitScreens}
              user={{ firstName: 'Ava', lastName: 'Gregoraci' }}
              createdAt="2023-03-12T00:12:30.000Z"
              numberOfViews={20}
              setShowEditSplitScreens={setShowEditSplitScreens}
              devotion={{
                title: 'Purity of the soul',
                content: `<p style="fontSize: 14px; fontWeight: 400">Lorem ipsum dolor sit amet consectetur. Enim ullamcorper nulla neque
              dictum massa imperdiet non leo. Arcu urna imperdiet at faucibus
              adipiscing eget ullamcorper. Ipsum sed blandit vestibulum non senectus
              nunc. Pretium volutpat semper pellentesque feugiat odio lobortis eget
              risus iaculis. Quam mauris sagittis nibh elementum. Tristique massa sem
              nisl eu magnis. Non sagittis nibh lectus enim ullamcorper varius mi
              aliquam. Quam elementum accumsan sed condimentum lorem. Sodales egestas
              orci varius proin pellentesque scelerisque vulputate. Purus egestas
              ornare vestibulum pellentesque ut tincidunt turpis sociis. Pulvinar
              ipsum at sed sed adipiscing nec viverra eget. Arcu mauris magna
              tincidunt magnis sed odio dui interdum. Ut turpis mi gravida orci lacus
              eu pellentesque est. Magna phasellus ornare morbi quis. Eu aliquet sed
              nisl a volutpat est libero turpis. Sed nec nunc vel euismod at ut nulla.
              Aenean nunc euismod et purus velit sem nunc. Morbi ac semper eget id
              lobortis ut amet. Lorem consectetur facilisis duis posuere ornare lacus
              vulputate in. Nunc ut pharetra ligula faucibus at tortor. Eget lacus in
              id vulputate interdum. Non elit vitae mauris felis semper id ipsum
              vestibulum morbi. Velit potenti vitae dui tempus diam cras. Aliquam sed
              sed eleifend interdum sed proin nunc congue nibh. Diam cras ultrices
              ligula congue molestie massa. Cursus morbi a diam quam egestas. Eu risus
              sapien mattis urna. Viverra lorem quis neque tincidunt elit vestibulum
              sit tortor. Bibendum in eros donec et vel tellus egestas tellus. Ut
              semper enim vestibulum rhoncus sed sem felis tincidunt sit. Odio mi
              elementum elit massa auctor eu lectus. Nibh magna pellentesque diam
              eget. Praesent mollis praesent vestibulum posuere pharetra id nibh.
              Aenean id aliquam tempus eu donec aliquam ac. Quisque nunc imperdiet
              tristique id tellus. Iaculis metus massa in aliquet pulvinar mattis
              lectus vel purus. Elementum orci malesuada sagittis purus nisi elementum
              donec non consectetur. Varius et mauris consectetur tellus accumsan
              posuere. Viverra viverra accumsan imperdiet nunc amet vivamus diam. Nec
              pretium amet urna magna. Id libero justo amet eu proin. Lectus amet
              ultrices dictumst etiam praesent faucibus morbi. Adipiscing pellentesque
              volutpat tincidunt risus ornare. Mauris lobortis a massa sit lacus in
              at. Lorem vitae gravida sodales eget nunc quisque viverra fames porta.
              Pellentesque ac nam mauris massa. Arcu blandit ante eget vitae commodo
              donec in nunc mi. Lectus tortor nunc consequat cursus nisi in quis. In
              libero hendrerit in vel amet eget. Egestas in integer pellentesque massa
              maecenas massa tellus. Ac eu urna arcu tincidunt morbi proin scelerisque
              proin pretium. In elementum diam mauris risus non. Sollicitudin faucibus
              lobortis odio risus amet vitae a vestibulum amet. Amet arcu neque
              pretium et sed bibendum volutpat nisl orci. Magnis ac aenean sit morbi.
              Donec in consequat varius lectus. Dignissim consectetur id elit orci
              placerat dui non nisi. Quis diam nec eget eget augue. Diam viverra
              placerat montes a imperdiet. In lorem et mus ut neque cursus ultricies
              diam ultrices. Morbi lorem faucibus purus egestas adipiscing in leo.
              Urna magnis risus egestas vel pellentesque sagittis massa. Nascetur enim
              iaculis proin curabitur ornare. Ipsum ornare gravida massa magna augue.
              Aliquam mattis quam ipsum dictumst.</p>`,
              }}
            />
          }
        />
      ) : (
        <div className="min-h-screen rounded-2xl border border-gray-200 bg-white p-6">
          <DevotionList
            showAddSplitScreens={showAddSplitScreens}
            setShowAddSplitScreens={setShowAddSplitScreens}
            setShowViewSplitScreens={setShowViewSplitScreens}
          />
        </div>
      )}
    </Layout>
  );
};

export default Devotions;
